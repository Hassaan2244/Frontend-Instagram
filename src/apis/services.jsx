// src/apis/service.js
import axios from 'axios';

const BASE_URL = "http://127.0.0.1:3001";

const API = axios.create({
  baseURL: BASE_URL,
});

// Interceptor to attach the token. 
// For production, consider removing the default token setting.
API.interceptors.request.use((config) => {
  // Use a consistent key: "token"
  let token = localStorage.getItem('token');
  if (!token) {
    // For testing only: remove or adjust in production.
    token = '3eac678422ea1e1284a901d67a047eb5f3384713';
    localStorage.setItem('token', token);
  }
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  config.headers["Content-Type"] = "application/json";
  return config;
});

export default API;

// Helper functions using the same key
const getAuthToken = () => {
  return localStorage.getItem("token");
};
const getHeaders = () => {
  const token = getAuthToken();
  if (!token) {
    throw new Error("User is not authenticated");
  }
  return {
    Authorization: `Token ${token}`,
    "Content-Type": "application/json",
  };
};

export { BASE_URL, getAuthToken, getHeaders };
