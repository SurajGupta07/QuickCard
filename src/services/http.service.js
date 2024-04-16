import axios from 'axios';
import { CONSTANTS } from '../types/constants';
import { API_BASE_URL, RAPID_API_KEY } from '../utils/config';

export const HttpService = async (param) => {
  const { url, method, baseUrlRequired = true, body = undefined, header } = param;

  let headers;
  let requestUrl = API_BASE_URL;
  if (baseUrlRequired) requestUrl = requestUrl + url;
  else requestUrl = url;

  if (header !== undefined) {
    headers = header;
  } else {
    headers = {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    };
  }

  const axiosParams = {
    method: method,
    url: requestUrl,
    data: body,
    headers: headers,
  };

  const resp = await axios(axiosParams).catch((error) => {
    console.error(error, requestUrl);
    return Promise.reject(CONSTANTS.SERVER_RESOURCE_NOT_FOUND);
  });

  return resp.data;
};
