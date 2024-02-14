
// import React, { useState } from "react";

// const DeleteServ = () => {
//   const services = [
//     {
//       id: 1,
//       title: "Medical Care",
//       details: [
//         "Regular Health Checkups",
//         "Medication Management",
//         "Chronic Disease Monitoring",
//       ],
//     },
//     {
//       id: 2,
//       title: "Emotional Support",
//       details: [
//         "Companionship",
//         "Mental Health Counseling",
//         "Social Engagement Activities",
//       ],
//     },
//     {
//       id: 3,
//       title: "Physical Therapy",
//       details: [
//         "Targeted Exercise Programs",
//         "Pain Management Techniques",
//         "Functional Improvement",
//       ],
//     },
//     {
//       id: 4,
//       title: "Care Coordination",
//       details: [
//         "Appointment Scheduling",
//         "Communication with Healthcare Providers",
//         "Service Coordination",
//       ],
//     },
//     {
//       id: 5,
//       title: "Home Safety",
//       details: [
//         "Fall Prevention Measures",
//         "Home Environment Assessment",
//         "Emergency Response Systems",
//       ],
//     },
//     {
//       id: 6,
//       title: "Daily Assistance",
//       details: [
//         "Meal Preparation",
//         "Personal Hygiene Assistance",
//         "Mobility Support",
//       ],
//     },
//     {
//       id: 7,
//       title: "Technology Integration",
//       details: [
//         "Telehealth Services",
//         "Remote Health Monitoring",
//         "Digital Communication Platforms",
//       ],
//     },
//     {
//       id: 8,
//       title: "Nutritional Guidance",
//       details: [
//         "Dietary Planning",
//         "Nutrition Education",
//         "Meal Planning for Health Conditions",
//       ],
//     },
//     {
//       id: 9,
//       title: "Specialized Programs",
//       details: [
//         "Memory Care Programs",
//         "Palliative Care",
//         "End-of-Life Care",
//       ],
//     },
//     {
//       id: 10,
//       title: "Rehabilitation Services",
//       details: [
//         "Physical Therapy",
//         "Occupational Therapy",
//         "Speech Therapy",
//       ],
//     },
//   ];

//   const [selectedService, setSelectedService] = useState(null);

//   const handleServiceSelect = (service) => {
//     setSelectedService(service);
//   };

//   const handleDeleteService = () => {
//     if (selectedService) {
//       // Implement your delete logic here
//       // For demonstration, let's log the service to delete
//       console.log("Deleting service:", selectedService);
//       // You can update the services array or perform API call for deletion
//       // Update the state accordingly to reflect changes
//       setSelectedService(null);
//     }
//   };

//   return (
//     <div className="container my-3 py-3">
//       <div className="row">
//         <div className="col-12">
//           <h2 className="display-5 text-center">Delete Services</h2>
//           <hr />
//         </div>
//       </div>
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <label htmlFor="serviceDropdown" className="form-label">
//             Select a Service to Delete:
//           </label>
//           <select
//             id="serviceDropdown"
//             className="form-select"
//             onChange={(e) => handleServiceSelect(JSON.parse(e.target.value))}
//           >
//             <option value="" disabled selected>
//               Select a service
//             </option>
//             {services.map((service) => (
//               <option key={service.id} value={JSON.stringify(service)}>
//                 {service.title}
//               </option>
//             ))}
//           </select>

//           {selectedService && (
//             <div className="card my-3">
//               <div className="card-body">
//                 <h5 className="card-title">{selectedService.title}</h5>
//                 <button
//                   className="btn btn-danger"
//                   onClick={handleDeleteService}
//                 >
//                   Delete Service
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeleteServ;

import React from 'react';
import '../assets/css/DeleteServ.css';

function DeleteServ({ services, onEdit, onDelete }) {
    const handleDelete = (serviceType) => {
        // Call the onDelete function with the serviceType
        onDelete(serviceType);
    };

    return (
        <div className="service-list">
            <table>
                <thead>
                    <tr>
                        <th>Service Type</th>
                        <th>Description</th>
                        <th>Charges</th>
                        <th>Timing</th>
                        <th>Service Availability</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service) => (
                        <tr key={service.serviceType}>
                            <td>{service.serviceType}</td>
                            <td>{service.serviceDescription}</td>
                            <td>{service.charge}</td>
                            <td>{service.duration}</td>
                            <td>{service.available ? 'Available' : 'Not Available'}</td>
                            <td>
                                <button onClick={() => onEdit(service)} >Edit</button>
                                {/* Pass serviceType to handleDelete */}
                                <button onClick={() => handleDelete(service.serviceType)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DeleteServ;