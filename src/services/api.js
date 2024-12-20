import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3333',
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@SendNow:token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;