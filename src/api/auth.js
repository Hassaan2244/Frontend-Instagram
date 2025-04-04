import axios from "axios";

const BASE_URL = "http://127.0.0.1:4007/user"; 

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/login/`, credentials);
    return response.data; 
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Login failed. Please try again."
    );
  }
};


export const signup = async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/create/`, userData);
      return response.data; 
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Signup failed. Please try again."
      );
    }
  };