// SignupPage.jsx
import React, { useState } from 'react';
import { registerUser } from '../axios/api';
import '../styles/SignupPage.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = { name, avatar, email, password };

    try {
      await registerUser(userData);
      setLoading(false);
      window.location.href = '/login';
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to register');
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <form onSubmit={handleSignup} className="signup-form">
        <h2>Create Account</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Avatar Image URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Create a Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
        <p className="login-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
