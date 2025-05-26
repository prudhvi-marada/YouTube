// LoginPage.jsx
import React, { useState } from 'react';
import { loginUser } from '../axios/api'; // Import login API
import '../styles/LoginPage.css'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = { email, password };
    
    try {
      const data = await loginUser(userData); // Call the login API
      localStorage.setItem('authToken', data.token); 
      localStorage.setItem('user', JSON.stringify(data.user)); // Store the token in local storage
      setLoading(false);
      // Redirect user to homepage or dashboard
      window.location.href = '/';
    } catch (error) {
      setError(error.message || 'Failed to login');
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={loading}>Login</button>
         <p className="signup-text">
         Don't have an account? <a href="/signup">Sign up</a>
         </p>
      </form>
     
    </div>
  );
};

export default LoginPage;
