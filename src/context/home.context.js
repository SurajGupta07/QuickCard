import React, { createContext, useContext, useEffect, useState } from 'react';
import { HttpService } from '../services/http.service';

export const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await HttpService({
        url: '/exercises',
        method: 'GET',
      });
      setExercises(res);
    })();
  }, []);

  return <HomeContext.Provider value={{ exercises }}>{children}</HomeContext.Provider>;
};

export default HomeProvider;

export const useHomeData = () => {
  return useContext(HomeContext);
};
