import axios from 'axios';

const baseURL = 'http://localhost/Laravel-Practice-ERP/public/api/'; // Replace with your actual base URL

const instance = axios.create({
  baseURL,
});

export default instance;
