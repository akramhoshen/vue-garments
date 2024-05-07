import axios from 'axios';

const baseURL = 'http://localhost/Laravel-Practice-ERP/public/api/'; // Laravel Api

const instance = axios.create({
  baseURL,
});

export default instance;
