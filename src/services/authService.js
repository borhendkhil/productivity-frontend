
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/signin`, { username, password });
  if (response.data.jwtToken) {
    localStorage.setItem('token', response.data.jwtToken);
    console.log('Token saved to local storage:', response.data.jwtToken);
  }
  return response.data;
};
const register = async (username, password, email, role) => {
    const response = await axios.post(`${API_URL}/signup`, { username, password, email, role });
    return response.data;
  };
  

const logout = () => {
  localStorage.removeItem('token');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('token'));
};

export default {
  login,
  logout,
  register,
  getCurrentUser,
};
