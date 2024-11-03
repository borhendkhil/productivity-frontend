
import React, { useState } from 'react';
import AuthService from '../services/authService';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(username, password);
      if (response) {
        // window.location.href = '/';
        console.log('Login successful', response);
        
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };;

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      </div>
      
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
