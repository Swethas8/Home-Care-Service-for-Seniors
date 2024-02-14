// // EditBooking.js

// import React, { useState } from "react";

// const EditBooking = ({ booking, onSave }) => {
//     const [editedBooking, setEditedBooking] = useState({ ...booking });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setEditedBooking((prevBooking) => ({
//             ...prevBooking,
//             [name]: value,
//         }));
//     };

//     const handleSave = () => {
//         // Pass the edited booking to the parent component (MyBooking.js)
//         onSave(editedBooking);
//     };

//     return (
//         <div className="container my-3 py-3">
//             <h1 className="text-center" style={{ color: "black" }}>Edit Booking</h1>
//             <hr />
//             <div className="row my-4">
//                 <div className="col-md-8 mx-auto">
//                     <form>
//                         <div className="form-group">
//                             <label htmlFor="serviceName" style={{color:"black",fontSize:'20px'}}>Service Name</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="serviceName"
//                                 name="serviceName"
//                                 value={editedBooking.serviceName}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="provider" style={{color:"black",fontSize:'20px'}}>Provider</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="provider"
//                                 name="provider"
//                                 value={editedBooking.provider}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="date" style={{color:"black",fontSize:'20px'}}>Date</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="date"
//                                 name="date"
//                                 value={editedBooking.date}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         {/* <div className="form-group">
//                             <label htmlFor="status">Status</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="status"
//                                 name="status"
//                                 value={editedBooking.status}
//                                 onChange={handleChange}
//                             />
//                         </div> */}
//                         <button type="button" className="btn btn-primary" onClick={handleSave}>
//                             Save
//                         </button>
//                         {/* <Link to="/MyBooking" className="btn btn-primary ml-2">
//                             Cancel
//                         </Link> */}

//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EditBooking;
import React, { useState } from 'react';

const EditBooking = ({ booking, onSave }) => {
  const [editedBooking, setEditedBooking] = useState(booking);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBooking({
      ...editedBooking,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedBooking);
  };

  return (
    <div className="edit-booking-form">
      <h2>Edit Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="serviceName">Service Name:</label>
          <input
            type="text"
            id="serviceName"
            name="serviceName"
            value={editedBooking.serviceName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="provider">Provider:</label>
          <input
            type="text"
            id="provider"
            name="provider"
            value={editedBooking.provider}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="text"
            id="date"
            name="date"
            value={editedBooking.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            name="status"
            value={editedBooking.status}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditBooking;
