import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heartbeatLogo from './heartbeat.png'; // Ensure the correct path
import './componentsCSS/Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    console.log('Logging in with:', email);
    navigate('/homepage'); // Replace with actual authentication logic
  };

  return (
    <>
      <div className='Loginnavbar'>
        <img src={heartbeatLogo} alt='Logo' className='logoImage' />
        <h2 className='symptosenseHeader'>Symptosense</h2>
      </div>
      <div className="login-container">
      <div className="login-box">
        <div className="text-center">
          <h1 className="login-title">Login</h1>
          <p className="login-subtext">Please sign in to your account</p>
        </div>

        {error && <div className="error-message">{error}</div>}
      <div className='innerLoginDiv'>
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="form-input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="form-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="options-container">
            <div className="remember-me">
              <input id="remember-me" name="remember-me" type="checkbox" className="checkbox" />
              <label htmlFor="remember-me" className="checkbox-label">Remember me</label>
            </div>

            <div className="forgot-password">
              <a href="#" className="link">Forgot your password?</a>
            </div>
          </div>

          <div>
            <button type="submit" className="submit-button">Sign in</button>
          </div>
        </form>

        <p className="signup-text">
          Don't have an account?{' '}
          <span className="signup-link" onClick={() => navigate('/signup')}>Sign up</span>
        </p>
      </div>
      </div>
    </div>
    </>
  );
}

export default Login;
