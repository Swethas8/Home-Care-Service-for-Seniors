// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// const Service = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState([]);
//   const [loading, setLoading] = useState(false);
//   let componentMounted = true;
//   useEffect(() => {
//     const getProducts = async () => {
//       setLoading(true);
//       setTimeout(() => {
//         if (componentMounted) {
//           const productsArray = [
//             {
//               id: 1,
//               title: "Home Care Service",
//               description: "Comprehensive home care services for your needs.",
//               image: "https://d13iq96prksfh0.cloudfront.net/cdn/photos/375714/original.jpeg",
//               price: 1500, 
//               category: "Home Care Service",
//               details: {
//                 provider: "HomeCare Pro",
//                 duration: "1 month",
//                 features: [
//                   "Health assessments",
//                   "Medication management",
//                   "24/7 emergency support",
//                 ],
//               },
//             },
//             {
//               id: 2,
//               title: "Electronics Repair Service",
//               description: "Expert electronics repair and troubleshooting.",
//               image: "https://optimoroute.com/wp-content/uploads/2020/10/Electronic-Repair-Hero-Blog.jpg",
//               price: 800,
//               category: "Electronics Service",
//               details: {
//                 provider: "TechFix Solutions",
//                 duration: "48 hours",
//                 features: [
//                   "Repair of all electronic devices",
//                   "Diagnostic services",
//                   "Quality spare parts",
//                 ],
//               },
//             },
//             {
//               id: 3,
//               title: "Personal Assistant Service",
//               description: "Your dedicated personal assistant for various tasks.",
//               image: "https://www.welcomehomecare.com/wp-content/uploads/sites/360/2018/04/left-img.jpg",
//               price: 1200,
//               category: "Personal Assistant Service",
//               details: {
//                 provider: "TaskMaster Assist",
//                 duration: "24 hours",
//                 features: [
//                   "Appointment scheduling",
//                   "Travel arrangements",
//                   "Task prioritization",
//                 ],
//               },
//             }
//           ];
//           setData(productsArray);
//           setFilter(productsArray);
//           setLoading(false);
//         }
//       }, 1000);

//       return () => {
//         componentMounted = false;
//       };
//     };

//     getProducts();
//   }, []);

//   const filterProduct = (cat) => {
//     if (cat === "All") {
//       setFilter(data);
//     } else {
//       const updatedList = data.filter((item) => item.category === cat);
//       setFilter(updatedList);
//     }
//   };
//   const redirectToBookService = () => {
//     const isLoggedIn = true;
//     if (isLoggedIn) {
//       window.location.href = "/BookService";
//     } else {
//       window.location.href = "/Login";
//     }
//   };
//   const ShowProducts = () => {
//     return (
//       <>
//         <div className="buttons text-center py-5">
//           <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("All")}>
//             All
//           </button>
//           <button
//             className="btn btn-outline-dark btn-sm m-2"
//             onClick={() => filterProduct("Home Care Service")}
//           >
//             Home Care Service
//           </button>
//           <button
//             className="btn btn-outline-dark btn-sm m-2"
//             onClick={() => filterProduct("Electronics Service")}
//           >
//             Electronics Service
//           </button>
//           <button
//             className="btn btn-outline-dark btn-sm m-2"
//             onClick={() => filterProduct("Personal Assistant Service")}
//           >
//             Personal Assistant Service
//           </button>
//         </div>
//         {filter.map((product) => {
//           return (
//             <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
//               <div className="card text-center h-100" key={product.id}>
//                 <img
//                   className="card-img-top p-3"
//                   src={product.image}
//                   alt="Card"
//                   height={300}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title" style={{marginBottom:'2rem'}}>{product.title}</h5>
//                   <p className="card-text">{product.description}</p>
//                 </div>
//                 <ul className="list-group list-group-flush">
//                   <li className="list-group-item lead">$ {product.price}</li>
//                   <li className="list-group-item">
//                     Provider: {product.details.provider}
//                   </li>
//                   <li className="list-group-item">
//                     Duration: {product.details.duration}
//                   </li>
//                   <li className="list-group-item">
//                     Features: {product.details.features.join(", ")}
//                   </li>
//                 </ul>
//                 <div className="card-body">
//                   <Link to='#'>
//                     <button style={{ backgroundColor: "black" }} onClick={redirectToBookService}>
//                       Book now
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </>
//     );
//   };
//   const isLoggedIn = () => {
//     return true;
//   };
//   return (
//     <>
//       <div className="container my-3 py-3">
//         <div className="row">
//           <div className="col-12">
//             <h2 className="display-5 text-center">Latest Services</h2>
//             <hr />
//           </div>
//         </div>
//         <div className="row justify-content-center">
//           {loading ? <p>Loading...</p> : <ShowProducts />}
//         </div>
//       </div>
//     </>
//   );
// };
// export default Service;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Service = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get("http://localhost:8080/service/display", {
          headers: {
            Authorization: `Bearer ${token}` // Corrected the Authorization header syntax
          }
        });
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);


  const renderServices = () => {
    return services.map((service) => (
      <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4" key={service.serviceId}>
        <div className="card text-center h-100">
          <img className="card-img-top p-3" src="https://www.shutterstock.com/image-photo/portrait-nurse-her-senior-client-600nw-2291576643.jpg" alt="Service" />
          <div className="card-body">
            <h5 className="card-title">{service.serviceType}</h5>
            <p className="card-text">{service.serviceDescription}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Duration: {service.duration}</li>
            <li className="list-group-item">Charges: {service.charge}</li>
            <li className="list-group-item">
              Service Type: {service.serviceType}
            </li>
            <li className="list-group-item"> Description: {service.serviceDescription}</li>
            <li className="list-group-item">Available: {service.available ? 'Yes' : 'No'}</li>
          </ul>
          <div className="card-body">
            <Link to="/BookService">
              <button style={{ backgroundColor: "black" }} >
                Book now
              </button>
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Services</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <p>Loading...</p> : renderServices()}
        </div>
      </div>
    </>
  );
};

export default Service;