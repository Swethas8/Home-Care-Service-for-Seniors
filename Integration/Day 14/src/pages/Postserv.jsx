import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/Postserv.css';
import { ANavbar, Navbar } from '../components';

const App = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    serviceDescription: '',
    duration: '',
    charge: '',
    available: '',
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
    setMessage('');
  };

  const handleAddService = async () => {
    const validationErrors = {};
    let hasErrors = false;

    // Validate form fields
    if (!formData.serviceType.trim()) {
      validationErrors.serviceType = 'Service Type is required';
      hasErrors = true;
    }

    if (!formData.serviceDescription.trim()) {
      validationErrors.serviceDescription = 'Service Description is required';
      hasErrors = true;
    }

    if (!formData.duration.trim()) {
      validationErrors.duration = 'Duration is required';
      hasErrors = true;
    }

    if (!formData.charge.trim()) {
      validationErrors.charge = 'charge is required';
      hasErrors = true;
    }

    if (!formData.available.trim()) {
      validationErrors.available = 'Available is required';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(validationErrors);
      setMessage('');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        console.error('Token not found. Please log in again.');
        setMessage('Token not found. Please log in again.');
        return;
      }

      const response = await axios.post('http://localhost:8080/service/post', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Response from server:', response.data);
      setMessage('Service added successfully!');
      // Reset form data after successful submission if needed
      setFormData({
        serviceType: '',
        serviceDescription: '',
        duration: '',
        charge: '',
        available: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Error adding service. Please try again.');
    }
  };

  return (
    <>
      <div className="background">
        <div className='overlay8'></div>

        <div className="booking-form">
          <h2>ADD SERVICE FORM</h2>
          <form>
            <label htmlFor="serviceName">Service Type</label>
            <input type="text" name="serviceType" id="serviceType" onChange={handleChange} value={formData.serviceType} required />
            {errors.serviceType && <div className="error-message">{errors.serviceType}</div>}

            <label htmlFor="serviceDescription">Service Description</label>
            <textarea name="serviceDescription" id="serviceDescription" onChange={handleChange} value={formData.serviceDescription} required />
            {errors.serviceDescription && <div className="error-message">{errors.serviceDescription}</div>}

            <label htmlFor="duration">Duration</label>
            <input type="text" name="duration" id="duration" onChange={handleChange} value={formData.duration} required />
            {errors.duration && <div className="error-message">{errors.duration}</div>}

            <label htmlFor="charge">charge</label>
            <input type="text" name="charge" id="charge" onChange={handleChange} value={formData.charge} required />
            {errors.charge && <div className="error-message">{errors.charge}</div>}

            <label htmlFor="available">Available</label>
            <input type="text" name="available" id="available" onChange={handleChange} value={formData.available} required />
            {errors.available && <div className="error-message">{errors.available}</div>}

            <button type="button" onClick={handleAddService}>Add Service</button>
            {message && <div className="message">{message}</div>}
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
