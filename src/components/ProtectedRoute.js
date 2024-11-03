
import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../services/authService';

const ProtectedRoute = ({ element }) => {
  return AuthService.getCurrentUser() ? element : <Navigate to="/login" />;
  
};

export default ProtectedRoute;
