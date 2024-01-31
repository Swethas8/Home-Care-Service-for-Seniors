// import React from "react";
// import { Link } from "react-router-dom";
// import { Footer, Navbar } from "../components";

// const Login = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="container my-3 py-3">
//         <h1 className="text-center">Login</h1>
//         <hr />
//         <div class="row my-4 h-100">
//           <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//             <form>
//               <div class="my-3">
//                 <label for="display-4">Email address</label>
//                 <input
//                   type="email"
//                   class="form-control"
//                   id="floatingInput"
//                   placeholder="name@example.com"
//                 />
//               </div>
//               <div class="my-3">
//                 <label for="floatingPassword display-4">Password</label>
//                 <input
//                   type="password"
//                   class="form-control"
//                   id="floatingPassword"
//                   placeholder="Password"
//                 />
//               </div>
//               <div className="my-3">
//                 <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
//               </div>
//               <div className="text-center">
//                   <Link to='/Home'>
//                 <button class="my-2 mx-auto btn btn-dark" type="submit" >
//                   Login
//                 </button>
//                   </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');

  const validateLogin = () => {
    setUsernameError('');
    setPasswordError('');
    setError('');

    if (!username) {
      setUsernameError('Enter Username');
    }

    if (!password) {
      setPasswordError('Enter Password');
    }

    if (username && password) {
      if (username === 'Admin08' && password === 'Admin123') {
        setError('');
        // Navigate to Home.js when both username and password are filled
        window.location.href = '/Home';
      } else if (username === 'admin') {
        setError('Invalid Password');
      } else if (password === 'admin123') {
        setError('Invalid Username');
      } else {
        setError('Invalid Username and Password:(');
      }
    }
  };

  return (
    <>
    <div style={{ textAlign: 'center', margin: '50px auto', maxWidth: '400px' }}>
      <form style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
        <h2>User Login</h2>

        <label htmlFor="username" style={{ display: 'block', margin: '10px 0' }}>Username:</label>
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
          style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
        />
        {usernameError && <div style={{ color: 'red', margin: '5px 0' }}>{usernameError}</div>}

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
          onClick={validateLogin}
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

export default UserLogin;
