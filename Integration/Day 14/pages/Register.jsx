// import React from 'react'
// import { Footer, Navbar } from "../components";
// import { Link } from 'react-router-dom';
// const Register = () => {
//     return (
//         <>
//             <Navbar />
//             <div className="container my-3 py-3">
//                 <h1 className="text-center">Register</h1>
//                 <hr />
//                 <div class="row my-4 h-100">
//                     <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//                         <form>
//                             <div class="form my-3">
//                                 <label for="Name">Full Name</label>
//                                 <input
//                                     type="email"
//                                     class="form-control"
//                                     id="Name"
//                                     placeholder="Enter Your Name"
//                                 />
//                             </div>
//                             <div class="form my-3">
//                                 <label for="Email">Email address</label>
//                                 <input
//                                     type="email"
//                                     class="form-control"
//                                     id="Email"
//                                     placeholder="name@example.com"
//                                 />
//                             </div>
//                             <div class="form  my-3">
//                                 <label for="Password">Password</label>
//                                 <input
//                                     type="password"
//                                     class="form-control"
//                                     id="Password"
//                                     placeholder="Password"
//                                 />
//                             </div>
//                             <div className="my-3">
//                                 <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
//                             </div>
//                             <div className="text-center">
//                                 <button class="my-2 mx-auto btn btn-dark" type="submit" >
//                                     Register
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default Register


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Navbar } from '../components';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === '')) {
      try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/register', formData);
        console.log('Registration successful:', response.data);
        setShowSuccessModal(true);
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          mobileNumber: '',
        });
      } catch (error) {
        console.error('Registration failed:', error);
      }
    }
  };

  const validateForm = (data) => {
    const newErrors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      mobileNumber: '',
    };

    if (!data.name.trim()) {
      newErrors.name = 'name is required';
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!data.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (data.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!isStrongPassword(data.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character';
    }

    if (!data.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (data.confirmPassword !== data.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!data.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile Number is required';
    } else if (!isValidMobileNumber(data.mobileNumber)) {
      newErrors.mobileNumber = 'Enter a valid mobile number';
    }

    return newErrors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isStrongPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const isValidMobileNumber = (mobileNumber) => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobileNumber);
  };

  return (
    <>
      <Navbar />
      <div style={{ ...styles.container, paddingTop: '10%' }}>
        <h2 style={styles.heading}> Registration</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="name">name:</label>
            <input style={styles.input}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <div style={styles.error}>{errors.name}</div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">Email:</label>
            <input style={styles.input}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <div style={styles.error}>{errors.email}</div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="password">Password:</label>
            <input style={styles.input}
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <div style={styles.error}>{errors.password}</div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="confirmPassword">Confirm Password:</label>
            <input style={styles.input}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <div style={styles.error}>{errors.confirmPassword}</div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="mobileNumber">Mobile Number:</label>
            <input style={styles.input}
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            <div style={styles.error}>{errors.mobileNumber}</div>
          </div>

          <button type="submit" style={styles.button}>Register</button>
          <p style={styles.loginLink}>
            Already Registered ? <Link to="/Login">Login here</Link>
          </p>
        </form>
      </div>

      {showSuccessModal && (
        <div style={styles.successModal}>
          <h3 style={{ color: 'green' }}>Registration Successful!</h3>
          <p>Your account has been successfully registered.</p>
          <button onClick={() => setShowSuccessModal(false)} style={styles.successButton}>Close</button>
        </div>
      )}
    </>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    height: '90vh',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '5px',
    overflowY: 'scroll',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#333',
  },
  formGroup: {
    marginBottom: '10px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  error: {
    color: '#e74c3c',
    marginTop: '5px',
  },
  button: {
    width: '100%',
    padding: '12px',
    color: 'white',
    backgroundColor: 'green',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  loginLink: {
    margin: '10px 0',
  },
  successModal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    zIndex: 999,
  },
  successButton: {
    backgroundColor: 'green',
    color: 'white',
    padding: '8px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Register;

