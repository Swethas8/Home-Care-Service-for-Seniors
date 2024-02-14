// // src/App.jsx
// import { useState } from 'react';
// import '../assets/css/EditServ.css';

// const EditServ = () => {
//   const [formData, setFormData] = useState({
//     serviceName: '',
//     serviceProvider: '',
//     description: '',
//     charges: '',
//     timing: '',
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };


//   const handleSearch = () => {
//     // Add logic for search functionality
//     console.log('Search button clicked!');
//   };

//   return (
//     <div className="background">
//       <div className='overlay8'></div>

//       <div className="booking-form">
//         <h2>EDIT SERVICE FORM</h2>

//         {/* Search Input */}
//         <div className="search">
//           <input
//             type="text"
//             placeholder="Search by Service Name"
//             onChange={handleChange}
//             value={formData.serviceName}
//           />
//           <button type="button" className='search' onClick={handleSearch}>
//             Search
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default EditServ;


import React, { useState } from 'react';
import '../assets/css/EditServ.css';

function EditServ({ service, onSave }) {
    const [editedService, setEditedService] = useState(service);

    const handleSaveChanges = () => {
        onSave(editedService);
    };

    return (
        <div className="edit-service">
            <h1>Edit Service</h1>
            <form>
                <label htmlFor="serviceType">Service Type:</label>
                <input
                    type="text"
                    id="serviceType"
                    value={editedService.serviceType}
                    onChange={(e) => setEditedService({ ...editedService, serviceType: e.target.value })}
                    required
                />

                <label htmlFor="serviceDescription">Service Description:</label>
                <textarea
                    id="serviceDescription"
                    value={editedService.serviceDescription}
                    onChange={(e) => setEditedService({ ...editedService, serviceDescription: e.target.value })}
                    required
                />

                <label htmlFor="charge">Charge:</label>
                <input
                    type="text"
                    id="charge"
                    value={editedService.charge}
                    onChange={(e) => setEditedService({ ...editedService, charge: e.target.value })}
                    required
                />

                <label htmlFor="duration">Duration:</label>
                <input
                    type="text"
                    id="duration"
                    value={editedService.duration}
                    onChange={(e) => setEditedService({ ...editedService, duration: e.target.value })}
                    required
                />

                <label htmlFor="available">Service Availability:</label>
                <input
                    type="text"
                    id="available"
                    value={editedService.available}
                    onChange={(e) => setEditedService({ ...editedService, available: e.target.value })}
                    required
                />

                <button type="button" onClick={handleSaveChanges}>
                    Save Changes
                </button>
            </form>
        </div>
    );
}

export default EditServ;