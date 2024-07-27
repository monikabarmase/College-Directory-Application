import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error during login', error);
    return { success: false };
  }
};
