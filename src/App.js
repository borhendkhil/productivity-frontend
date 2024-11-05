
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import ProtectedRoute from './components/ProtectedRoute';
import RegisterPage from './components/RegisterPage';
import NavBar from './components/NavBar';

const App = () => (
  
  <Router>
    <CssBaseline />
    <NavBar/>
    <Container>
      
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<ProtectedRoute element={<HomePage />} />} />
      <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
      {/* Add other routes here */}
    </Routes>
    </Container>
  </Router>
);

export default App;
