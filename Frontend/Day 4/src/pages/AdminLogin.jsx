// AdminLogin.js

import React, { useState } from 'react';
import '../assest/css/AdminLogin.css'; // Import the CSS file

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');

  const validateLogin = () => {
    setUsernameError('');
    setPasswordError('');
    setError('');

    if (!username || !password) {
      if (!username) {
        setUsernameError('Enter Username');
      }

      if (!password) {
        setPasswordError('Enter Password');
      }

      return;
    }

    if (username === 'Admin08' && password === 'Admin123') {
      // Navigate to AdminHome.js when both username and password are filled correctly
      window.location.href = '/AHome';
    } else {
      setError('Invalid Username and/or Password :(');
    }
  };

  return (
    <div className="admin-login-container">
      <form className="admin-login-form">
        <h2>Admin Login</h2>

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setUsernameError('');
          }}
          required
        />
        {usernameError && <div className="error-message">{usernameError}</div>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError('');
          }}
          required
        />
        {passwordError && <div className="error-message">{passwordError}</div>}

        <button
          type="button"
          onClick={validateLogin}
        >
          Login
        </button>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
};

export default AdminLogin;
