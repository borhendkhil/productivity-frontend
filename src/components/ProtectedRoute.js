
import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../services/authService';

const ProtectedRoute = ({ element }) => {
  const isLoggedIn = true;
  return isLoggedIn ? element : <Navigate to="/login" />;
  
};

export default ProtectedRoute;
