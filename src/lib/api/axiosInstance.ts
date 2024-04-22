import axios from 'axios';

import { BASE_URL_API } from '@/utils/constans';

const Axios = axios.create({
  baseURL: `${BASE_URL_API}/api/`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
    // Authorization: `Bearer ${getUserToken()}`,
  }
});

Axios.interceptors.response(
  (response) => {
    return response;
  },
  (error) => {
    console.log('Error: ', error);
    return Promise.reject(error);
  }
);
