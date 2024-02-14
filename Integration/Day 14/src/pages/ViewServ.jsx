// import '../assets/css/ViewServ.css';

// function ViewServ() {
//   return (
//     <div className="background">
//       <div className='overlay8'></div>

//       <div className="booking-form">
//         <h2>VIEW SERVICE FORM</h2>
//         <div className="table-container">
//           <div className="table-row form-title">
//             <div className="header-cell">Service Type</div>
//             <div className="header-cell">Service Description</div>
//             <div className="header-cell">Duration</div>
//             <div className="header-cell">Charges</div>
//             <div className="header-cell">Available</div>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ViewServ;


// viewservice.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/ViewServ.css';
import ServiceList from './DeleteServ';
import EditService from './EditServ';

function ViewServ() {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8080/service/display', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setServices(response.data);
            } catch (error) {
                setError('Error fetching services');
                console.error('Error fetching services:', error);
            }
        };
        fetchServices();
    }, []);

    const handleEdit = (service) => {
        setSelectedService(service);
    };

    const handleDelete = async (serviceType) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:8080/service/delete/${serviceType}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setServices((prevServices) => prevServices.filter((service) => service.serviceType !== serviceType));
        } catch (error) {
            setError('Error deleting service');
            console.error('Error deleting service:', error);
        }
    };

    const handleSave = async (editedService) => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(`http://localhost:8080/service/update/${editedService.serviceType}`, editedService, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setServices((prevServices) =>
                prevServices.map((service) => (service.serviceType === editedService.serviceType ? editedService : service))
            );
            setSelectedService(null);
        } catch (error) {
            setError('Error updating service');
            console.error('Error updating service:', error);
        }
    };

    return (
        <>
            <div className="view-service-page">
                <h1>View Service Page</h1>

                {error && <div>Error: {error}</div>}

                {selectedService ? (
                    <EditService service={selectedService} onSave={handleSave} />
                ) : (
                    <>
                        <ServiceList services={services} onEdit={handleEdit} onDelete={handleDelete} />
                    </>
                )}

                <Link to="/AHome">
                    <button className="back-to-dashboard-button">Back to Dashboard</button>
                </Link>
            </div>
        </>
    );
}

export default ViewServ;
