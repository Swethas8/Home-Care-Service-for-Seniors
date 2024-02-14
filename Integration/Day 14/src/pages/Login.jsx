import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setEmailError('');
    setPasswordError('');
    setError('');

    if (!email) {
      setEmailError('Enter email');
    }

    if (!password) {
      setPasswordError('Enter Password');
    }

    if (email && password) {
      try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
          email,
          password
        });

        // Check if the login is successful and the role is "USER"
        if (response.status === 202 && response.data.role === 'USER') {
          // Store token in local storage
          localStorage.setItem('token', response.data.token);
          alert('Login successful');
          navigate('/UHome'); // Redirect to the user home page
        } else {
          setError('Invalid credentials');
        }
      } catch (error) {
        console.error('Login failed:', error.response);
        setError('Invalid email or password');
      }
    }
  };

  return (
    <>
      <div style={{ textAlign: 'center', margin: '50px auto', maxWidth: '400px' }}>
        <form style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
          <h2> Login</h2>

          <label htmlFor="email" style={{ display: 'block', margin: '10px 0' }}>Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');
            }}
            required
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
          {emailError && <div style={{ color: 'red', margin: '5px 0' }}>{emailError}</div>}

          <label htmlFor="password" style={{ display: 'block', margin: '10px 0' }}>Password:</label>
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
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
          {passwordError && <div style={{ color: 'red', margin: '5px 0' }}>{passwordError}</div>}
          <button
            type="button"
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '10px',
              margin: '20px 0',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
            onClick={handleLogin}
          >
            Login
          </button>
          {error && <div style={{ color: 'red', margin: '5px 0' }}>{error}</div>}
          <p style={{ margin: '10px 0' }}>
            New User? <Link to="/Register">Register here.</Link>
          </p>
          <p style={{ margin: '10px 0' }}>
            To Edit Profile: <Link to="/Profile">Edit Profile.</Link>
          </p>

        </form>
      </div>
    </>
  );
};

export default Login;
