import React from 'react';
import '../assets/css/deleteBooking.css'

const DeleteBooking = ({ booking, onDelete }) => {
  return (
    <div className="delete-booking">
      <p>Are you sure you want to delete this booking?</p>
      <p>Service Name: {booking.serviceName}</p>
      <p>Provider: {booking.provider}</p>
      <p>Date: {booking.date}</p>
      <p>Status: {booking.status}</p>
      <button onClick={() => onDelete(booking.id)}>Confirm Delete</button>
    </div>
  );
};

export default DeleteBooking;
