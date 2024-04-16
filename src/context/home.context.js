import React, { createContext, useContext, useEffect, useState } from 'react';
import { HttpService } from '../services/http.service';
import { METHODS } from '../types/constants';
import { GET_EXERCISES } from '../utils/endpoints';

export const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await HttpService({
        url: GET_EXERCISES,
        method: METHODS.GET,
        params: { limit: 8 },
      });
      setExercises(res);
    })();
  }, []);

  return (
    <HomeContext.Provider value={{ exercises, setExercises }}>{children}</HomeContext.Provider>
  );
};

export default HomeProvider;

export const useHomeData = () => {
  return useContext(HomeContext);
};
