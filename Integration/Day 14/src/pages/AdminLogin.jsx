// // AdminLogin.js

// import React, { useState } from 'react';
// import '../assets/css/AdminLogin.css'; // Import the CSS file

// const AdminLogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [error, setError] = useState('');

//   const validateLogin = () => {
//     setUsernameError('');
//     setPasswordError('');
//     setError('');

//     if (!username || !password) {
//       if (!username) {
//         setUsernameError('Enter Username');
//       }

//       if (!password) {
//         setPasswordError('Enter Password');
//       }

//       return;
//     }

//     if (username === 'Admin08' && password === 'Admin123') {
//       // Navigate to AdminHome.js when both username and password are filled correctly
//       window.location.href = '/AHome';
//     } else {
//       setError('Invalid Username and/or Password :(');
//     }
//   };

//   return (
//     <div className="admin-login-container">
//       <form className="admin-login-form">
//         <h2>Admin Login</h2>

//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={username}
//           onChange={(e) => {
//             setUsername(e.target.value);
//             setUsernameError('');
//           }}
//           required
//         />
//         {usernameError && <div className="error-message">{usernameError}</div>}

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//             setPasswordError('');
//           }}
//           required
//         />
//         {passwordError && <div className="error-message">{passwordError}</div>}

//         <button
//           type="button"
//           onClick={validateLogin}
//         >
//           Login
//         </button>
//         {error && <div className="error-message">{error}</div>}
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;

// AdminLogin.jsx

// AdminLogin.jsx

import React, { useState } from 'react';
import '../assets/css/AdminLogin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email: email,
        password: password
      });

      // Assuming successful login returns status code 200
      if (response.status === 202) {
        setError('');
        if (response.data.role === 'ADMIN') {
          // Store token in localStorage
          localStorage.setItem('token', response.data.token);

          navigate('/AHome'); // Redirect to AdminHome if login is successful
          alert('Login successful');
        } else {
          setError('You do not have permission to access this page.');
        }
      } else {
        setError('Invalid Email and/or Password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred while logging in. Please try again later.');
    }
  };

  return (
    <div className="admin-login-container">
      <form className="admin-login-form" onSubmit={handleLogin}>
        <h2>Admin Login</h2>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
};

export default AdminLogin;
