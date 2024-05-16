import axios from 'axios';
import { Cookie } from '@/utils/cookie.js';

const baseURL = 'http://localhost/laravel-garments-api/public/api/'; // Laravel Api

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  (config) => {
    const token = Cookie.getCookie('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
