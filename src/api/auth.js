// /api/auth.js
import axios from 'axios';

// Replace with your actual API URL
const API_URL = 'http://127.0.0.1:4007/user';

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login/`, credentials);
    // Inspect the response and check for the token property
    if (!response.data || !response.data.token) {
      // Optionally log the entire response for debugging
      console.error("Unexpected response format:", response.data);
      throw new Error('No token returned from the API');
    }
    return response.data; // Return user data or token
  } catch (error) {
    console.error("Login error:", error.response ? error.response.data : error.message);
    // Use the error response from the backend if available
    throw new Error(error.response?.data?.message || 'Login failed. Please check your credentials.');
  }
};
