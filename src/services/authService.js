
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


const API_URL = 'http://localhost:8080/api/auth';

const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/signin`, { email, password });
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
  const token = localStorage.getItem('token');
  if (token) {
    return jwtDecode(token);
    
  }
  return null;
};
const getUserdetails = async () => {

  
  const response = await axios.get(`${API_URL}/getCurrentUser`,
    { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
  return response.data;


}



export default {
  login,
  logout,
  register,
  getCurrentUser,
  getUserdetails
};
