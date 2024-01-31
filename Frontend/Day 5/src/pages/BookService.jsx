// src/components/BookService.jsx
import React, { Component } from 'react';
import '../assest/css/BookService.css';

class BookService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      mobileNumber: '',
      address: '',
      duration: '',
      date: '',
      description: '',
      patientName: '',
      altMobileNumber: '',
      selectedService: '', // Default service
      errors: {},
      bookingSuccess: false,
    };
  }
  componentDidMount() {
    // Add a class to the body when the component mounts
    document.body.classList.add('book-service-page');
  }

  componentWillUnmount() {
    // Remove the class from the body when the component unmounts
    document.body.classList.remove('book-service-page');
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();
    if (Object.keys(errors).length === 0) {
      // Perform form submission logic
      console.log('Form submitted successfully:', this.state);
      // Reset the form and show success message
      this.setState({
        username: '',
        mobileNumber: '',
        address: '',
        duration: '',
        date: '',
        description: '',
        patientName: '',
        altMobileNumber: '',
        selectedService: '',
        errors: {},
        bookingSuccess: true,
      });
    } else {
      this.setState({ errors, bookingSuccess: false });
    }
  };

  validateForm = () => {
    const errors = {};
    const { username, mobileNumber, address, duration, date, selectedService } = this.state;

    // Basic validation for required fields
    if (!username.trim()) {
      errors.username = 'Username is required';
    }

    if (!mobileNumber.trim()) {
      errors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      errors.mobileNumber = 'Enter a valid 10-digit mobile number';
    }

    if (!address.trim()) {
      errors.address = 'Address is required';
    }

    if (!duration.trim()) {
      errors.duration = 'Duration is required';
    }

    if (!date.trim()) {
      errors.date = 'Date is required';
    }

    if (!selectedService.trim()) {
      errors.selectedService = 'Service is required';
    }

    return errors;
  };

  render() {
    const { errors, bookingSuccess } = this.state;

    return (
      <div>
        <div className="book-service-container">
          <center><h2>Book a Service</h2></center>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <div className="error">{errors.username}</div>
            </div>

            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={this.state.mobileNumber}
                onChange={this.handleChange}
              />
              <div className="error">{errors.mobileNumber}</div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
              />
              <div className="error">{errors.address}</div>
            </div>

            <div className="form-group">
              <label htmlFor="duration">Duration:</label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={this.state.duration}
                onChange={this.handleChange}
              />
              <div className="error">{errors.duration}</div>
            </div>

            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="text"
                id="date"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
              <div className="error">{errors.date}</div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
              <div className="error">{errors.description}</div>
            </div>

            <div className="form-group">
              <label htmlFor="patientName">Patient Name:</label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                value={this.state.patientName}
                onChange={this.handleChange}
              />
              <div className="error">{errors.patientName}</div>
            </div>

            <div className="form-group">
              <label htmlFor="altMobileNumber">Alternate Mobile Number:</label>
              <input
                type="text"
                id="altMobileNumber"
                name="altMobileNumber"
                value={this.state.altMobileNumber}
                onChange={this.handleChange}
              />
              <div className="error">{errors.altMobileNumber}</div>
            </div>

            <div className="form-group">
              <label htmlFor="selectedService">Service:</label>
              <select
                id="selectedService"
                name="selectedService"
                value={this.state.selectedService}
                onChange={this.handleChange}
              >

                <option value="">Select Service</option>
                <option value="nursing">Nursing</option>
                <option value="gardening">Gardening</option>
                <option value="electronicRepair">Electronic Repair</option>
                <option value="homeCare">Home Care</option>
                <option value="companionCare">Companion Care</option>
              </select>
              <div className="error">{errors.selectedService}</div>
            </div>
            <center>
            <button type="submit">Book Now</button></center>
          </form>

          {/* Show success message if booking is successful */}
          {bookingSuccess && (
            <div className="success-message">
              <p>Booking successful! We will contact you shortly.</p>
            </div>
          )}

          {/* Show errors if there are any */}
          {Object.keys(errors).length > 0 && (
            <div className="error-message">
              <p>Oops! There are some errors in your submission. Please fix them and try again.</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default BookService;
