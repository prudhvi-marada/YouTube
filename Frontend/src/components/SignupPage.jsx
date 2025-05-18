import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { registerUser } from '../api.js';
import '../styles/SignupPage.css';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const history = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   setErrorMessage("Passwords don't match");
    //   return;
    // }
    // try {
    //   const data = await registerUser({ email, password });
    //   history.push('/login');
    // } catch (error) {
    //   setErrorMessage(error.message);
    // }
  };

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {/* {errorMessage && <p className="error">{errorMessage}</p>} */}
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default SignupPage;
