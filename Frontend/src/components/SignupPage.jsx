import React, { useState } from 'react';
import { registerUser } from '../axios/api';
import { Link } from 'react-router-dom';
import '../styles/SignupPage.css';
import '../App.css'

const SignupPage = () => {
  const [name, setName] = useState('');
  const avatar = "https://static.vecteezy.com/system/resources/previews/013/042/571/large_2x/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg"
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const userData = { name, avatar, email, password };

    try {
      await registerUser(userData);
      setLoading(false);
      // Redirect to login page after successful signup
      window.location.href = '/login';
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to register');
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <form onSubmit={handleSignup} className="signup-form" noValidate>
        <h2>Create Account</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          aria-label="Full Name"
        />
        
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email Address"
        />
        <input
          type="password"
          placeholder="Create a Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-label="Create a Password"
          minLength={6}
        />
        {error && <p className="error" role="alert">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
