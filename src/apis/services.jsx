import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:3001/', // update with your backend URL
});


API.interceptors.request.use((config) => {
  if (!localStorage.getItem('token')) {
    localStorage.setItem('token', '9f13cee78ab44db2250bef58dff0d7c12bea12d2');
  }
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});


export default API;