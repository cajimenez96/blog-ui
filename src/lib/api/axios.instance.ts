import axios from 'axios';

import { URL_API } from '@/utils/constans';

const instance = axios.create({
  baseURL: URL_API,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
    // Authorization: `Bearer ${update-token}`,
  }
});

instance.interceptors.request.use(
  (config) => {
    //Funcion a desarrollar
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
