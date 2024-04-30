import axios from 'axios';

import { URL_API } from '@/utils/constans';

const Axios = axios.create({
  baseURL: URL_API,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
  // withCredentials: true
});

Axios.interceptors.request.use(
  (config) => {
    const token = '';
    if (token) config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default Axios;
