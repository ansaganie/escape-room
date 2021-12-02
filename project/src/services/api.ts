import axios from 'axios';

const BACKEND_URL = 'http://localhost:3001';
const TIMEOUT = 5000;

const api = axios.create({
  baseURL: BACKEND_URL,
  timeout: TIMEOUT,
});

export default api;
