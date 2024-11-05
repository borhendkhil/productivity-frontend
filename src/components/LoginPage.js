
import React, { useState } from 'react';
import AuthService from '../services/authService';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(email, password);
      if (response) {
        // window.location.href = '/';
        console.log('Login successful', response);
        window.location.href = '/home';

        
        
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };;

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
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
