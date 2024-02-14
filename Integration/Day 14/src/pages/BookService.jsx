import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/BookService.css';

const BookService = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    serviceType: '',
    description: '',
    duration: '',
    date: '',
    careBeneficiary: '',
    address: '',
  });
  const [error, setError] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token');
      console.log('Token:', token); // Log the token to verify its value

      // Make sure token is available
      if (!token) {
        setError('Token not found. Please log in again.');
        return;
      }

      const response = await axios.post('http://localhost:8080/bookdto/post', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Handle the response
      console.log('Response:', response);

      // Check if the booking was successfully added
      if (response.status === 200) {
        setBookingSuccess(true);
      } else {
        setError('Failed to add booking. Please try again later.');
      }

      // Reset the form and errors
      setFormData({
        name: '',
        phoneNumber: '',
        serviceType: '',
        description: '',
        duration: '',
        date: '',
        careBeneficiary: '',
        address: '',
      });
      setError('');
    } catch (error) {
      // Handle errors
      console.error('Error adding booking:', error);
      setError('Error adding booking. Please try again later.');
    }
  };

  
  return (
    <div className="book-service-page">
      <div className="book-service-container">
        <center><h2>Book a Service</h2></center>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="serviceType">Service Type:</label>
            <input
              type="text"
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="duration">Duration:</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="text"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="careBeneficiary">Care Beneficiary:</label>
            <input
              type="text"
              id="careBeneficiary"
              name="careBeneficiary"
              value={formData.careBeneficiary}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* Include error message */}
          {error && <div className="error-message">{error}</div>}
          {/* Include success message */}
          {bookingSuccess && <div className="success-message">Booking successful!</div>}
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default BookService;
