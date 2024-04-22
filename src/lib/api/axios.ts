import { AxiosRequestConfig } from 'axios';

import instance from './axios.instance';

const Axios = {
  get: async <T>(url: string, config?: AxiosRequestConfig) => {
    return await instance.get<T>(url, config);
  },

  post: async <T>(url: string, data: object, config?: AxiosRequestConfig) => {
    return await instance.post<T>(url, data, config);
  },

  patch: async <T>(url: string, data: object, config?: AxiosRequestConfig) => {
    return await instance.patch<T>(url, data, config);
  },

  put: async <T>(url: string, data: object, config?: AxiosRequestConfig) => {
    return await instance.put<T>(url, data, config);
  }
};

export default Axios;
