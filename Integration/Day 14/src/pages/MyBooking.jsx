// // MyBookings.js

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Footer, Navbar } from "../components";
// import '../assest/css/MyBooking.css'

// const MyBooking = () => {
//   const [bookings, setBookings] = useState([
//     {
//       id: 1,
//       serviceName: "Home Care Service",
//       provider: "HomeCare Pro",
//       date: "2024-02-01",
//       status: "Confirmed",
//     },
//     {
//       id: 2,
//       serviceName: "Electronics Repair Service",
//       provider: "TechFix Solutions",
//       date: "2024-02-05",
//       status: "Pending",
//     },
//     // Add more bookings as needed
//   ]);

//   return (
//     <>
//       <div className="container my-3 py-3">
//         <h1 className="text-center" style={{color:"black"}}>My Bookings</h1>
//         <hr />
//         <div className="row my-4">
//           <div className="col-md-8 mx-auto">
//             {bookings.length === 0 ? (
//               <p className="text-center">No bookings yet.</p>
//             ) : (
//               <div className="booking-container">
//                 {bookings.map((booking) => (
//                   <div className="card" key={booking.id}>
//                     <div className="card-body">
//                       <h5 className="card-title">{booking.serviceName}</h5>
//                     </div>
//                     <div className="card-footer">
//                       <p>Provider: {booking.provider}</p>
//                       <p>Date: {booking.date}</p>
//                       <p>Status: {booking.status}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//             <div className="text-center mt-4">
//               <Link to="/BookService" className="btn btn-dark">
//                 Book Another Service
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MyBooking;
// MyBooking.js

// MyBooking.js



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import '../assest/css/MyBooking.css';

// const MyBooking = () => {
//   const [bookings, setBookings] = useState([
//     {
//       id: 1,
//       serviceName: "Home Care Service",
//       provider: "HomeCare Pro",
//       date: "2024-02-01",
//       status: "Confirmed",
//     },
//     {
//       id: 2,
//       serviceName: "Electronics Repair Service",
//       provider: "TechFix Solutions",
//       date: "2024-02-05",
//       status: "Pending",
//     },
//     // Add more bookings as needed
//   ]);

//   // Function to handle booking deletion
//   const handleDelete = (id) => {
//     const updatedBookings = bookings.filter((booking) => booking.id !== id);
//     setBookings(updatedBookings);
//   };

//   return (
//     <>
//       <div className="my-booking-page">
//         <h1 className="text-center" style={{ color: "black" }}>My Bookings</h1>
//         <hr />
//         <div className="container my-4">
//           <div className="row">
//             <div className="col-md-8 mx-auto">
//               {bookings.length === 0 ? (
//                 <p className="text-center">No bookings yet.</p>
//               ) : (
//                 <div className="booking-container">
//                   {bookings.map((booking) => (
//                     <div className="card" key={booking.id}>
//                       <div className="card-body">
//                         <h5 className="card-title">{booking.serviceName}</h5>
//                       </div>
//                       <div className="card-footer">
//                         <p>Provider: {booking.provider}</p>
//                         <p>Date: {booking.date}</p>
//                         <p>Status: {booking.status}</p>
//                         <div className="btn-container">
//                           <button className="btn btn-sm btn-primary">Edit</button>
//                           <button className="btn btn-sm btn-danger" onClick={() => handleDelete(booking.id)}>
//                             Delete
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//               <div className="text-center mt-4">
//                 <Link to="/BookService" className="btn btn-dark">
//                   Book Another Service
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MyBooking;
// MyBooking.js

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import EditBooking from "./EditBooking";
// import '../assets/css/MyBooking.css';

// const MyBooking = () => {
//   const [bookings, setBookings] = useState([
//     {
//       id: 1,
//       serviceName: "Home Care Service",
//       provider: "HomeCare Pro",
//       date: "2024-02-01",
//       status: "Confirmed",
//     },
//     {
//       id: 2,
//       serviceName: "Electronics Repair Service",
//       provider: "TechFix Solutions",
//       date: "2024-02-05",
//       status: "Pending",
//     },
//     // Add more bookings as needed
//   ]);

//   const [editingBooking, setEditingBooking] = useState(null);

//   const handleDelete = (id) => {
//     const updatedBookings = bookings.filter((booking) => booking.id !== id);
//     setBookings(updatedBookings);
//   };

//   const handleEdit = (booking) => {
//     setEditingBooking(booking);
//   };

//   const handleSave = (editedBooking) => {
//     const updatedBookings = bookings.map((booking) =>
//       booking.id === editedBooking.id ? editedBooking : booking
//     );
//     setBookings(updatedBookings);
//     setEditingBooking(null);
//   };

//   return (
//     <>
//       <div className="my-booking-page">
//         <h1 className="text-center" style={{ color: "black" }}>My Bookings</h1>
//         <hr />
//         <div className="container my-4">
//           <div className="row">
//             <div className="col-md-8 mx-auto">
//               {editingBooking ? (
//                 <EditBooking
//                   booking={editingBooking}
//                   onSave={handleSave}
//                 />
//               ) : (
//                 <div className="booking-container">
//                   {bookings.map((booking) => (
//                     <div className="card" key={booking.id}>
//                       <div className="card-body">
//                         <h5 className="card-title">{booking.serviceName}</h5>
//                       </div>
//                       <div className="card-footer">
//                         <p>Provider: {booking.provider}</p>
//                         <p>Date: {booking.date}</p>
//                         <p>Status: {booking.status}</p>
//                         <div className="btn-container">
//                           <button
//                             className="btn btn-sm btn-primary"
//                             onClick={() => handleEdit(booking)}
//                           >
//                             Edit
//                           </button>
//                           <button
//                             className="btn btn-sm btn-danger"
//                             onClick={() => handleDelete(booking.id)}
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//               <div className="text-center mt-4">
//                 <Link to="/BookService" className="btn btn-dark">
//                   Book Another Service
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MyBooking;

import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import EditBooking from "./EditBooking";
import '../assets/css/MyBooking.css';

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [editingBooking, setEditingBooking] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8080/bookdto/get', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8080/bookdto/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBookings(bookings.filter((booking) => booking.id !== id));
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const handleEdit = (booking) => {
    setEditingBooking(booking);
  };

  const handleSave = async (editedBooking) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`http://localhost:8080/bookdto/put/${editedBooking.id}`, editedBooking, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data) {
        const updatedBookings = bookings.map((booking) =>
          booking.id === editedBooking.id ? editedBooking : booking
        );
        setBookings(updatedBookings);
        setEditingBooking(null);
      } else {
        console.error('Failed to update booking:', response.data);
      }
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  return (
    <>
      <div className="my-booking-page">
        <h1 className="text-center" style={{ color: "black" }}>My Bookings</h1>
        <hr />
        <div className="container my-4">
          <div className="row">
            <div className="col-md-8 mx-auto">
              {editingBooking ? (
                <EditBooking
                  booking={editingBooking}
                  onSave={handleSave}
                />
              ) : (
                <div className="booking-container">
                  {bookings.map((booking) => (
                    <div className="card" key={booking.id}>
                      <div className="card-body">
                        <h5 className="card-title">{booking.serviceName}</h5>
                      </div>
                      <div className="card-footer">
                        <p>Provider: {booking.provider}</p>
                        <p>Date: {booking.date}</p>
                        <p>Status: {booking.status}</p>
                        <div className="btn-container">
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={() => handleEdit(booking)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(booking.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="text-center mt-4">
                <Link to="/BookService" className="btn btn-dark">
                  Book Another Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBooking;
