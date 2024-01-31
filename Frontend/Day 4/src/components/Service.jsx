// // src/components/Service.jsx
// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addCart } from "../redux/action";

// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// import { Link } from "react-router-dom";

// const Service = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState([]);
//   const [loading, setLoading] = useState(false);
//   let componentMounted = true;

//   const dispatch = useDispatch();

//   const addProduct = (product) => {
//     dispatch(addCart(product));
//   };

//   useEffect(() => {
//     const getProducts = async () => {
//       setLoading(true);
//       // Simulating an API call delay
//       setTimeout(() => {
//         if (componentMounted) {
//           // Updated array with Home Care Service details
//           const productsArray = [
//             {
//               id: 1,
//               title: "Home Care Service",
//               description: "Comprehensive home care services for your needs.",
//               image: "https://d13iq96prksfh0.cloudfront.net/cdn/photos/375714/original.jpeg", // Replace with the actual image URL
//               price: 1500, // Adjust the price accordingly
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
//                 turnaroundTime: "48 hours",
//                 features: [
//                   "Repair of all electronic devices",
//                   "Diagnostic services",
//                   "Quality spare parts",
//                 ],
//               },
//             },
//             // Add more products as needed
//             {
//               id: 3,
//               title: "Personal Assistant Service",
//               description: "Your dedicated personal assistant for various tasks.",
//               image: "https://www.welcomehomecare.com/wp-content/uploads/sites/360/2018/04/left-img.jpg",
//               price: 1200,
//               category: "Personal Assistant Service",
//               details: {
//                 provider: "TaskMaster Assist",
//                 availability: "Flexible hours",
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

//   const Loading = () => {
//     return (
//       <>
//         <div className="col-12 py-5 text-center">
//           <Skeleton height={40} width={560} />
//         </div>
//         {/* ... (skeletons for other items) */}
//       </>
//     );
//   };

//  // ...

// const filterProduct = (cat) => {
//   if (cat === "All") {
//     setFilter(data);
//   } else {
//     const updatedList = data.filter((item) => item.category === cat);
//     setFilter(updatedList);
//   }
// };

// const ShowProducts = () => {
//   return (
//     <>
//       <div className="buttons text-center py-5">
//         <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("All")}>
//           All
//         </button>
//         <button
//           className="btn btn-outline-dark btn-sm m-2"
//           onClick={() => filterProduct("Home Care Service")}
//         >
//           Home Care Service
//         </button>
//         <button
//           className="btn btn-outline-dark btn-sm m-2"
//           onClick={() => filterProduct("Electronics Service")}
//         >
//           Electronics Service
//         </button>
//         <button
//           className="btn btn-outline-dark btn-sm m-2"
//           onClick={() => filterProduct("Personal Assistant Service")}
//         >
//           Personal Assistant Service
//         </button>
//         {/* ... (other buttons) */}
//       </div>

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
//                   <h5 className="card-title">{product.title}</h5>
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
//                   {/* <Link to={`/product/${product.id}`} className="btn btn-dark m-1">
//                     Book Now
//                   </Link> */}
//                   <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
//                     Add to Service
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </>
//     );
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
//           {loading ? <Loading /> : <ShowProducts />}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Service;


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
//       // Simulating an API call delay
//       setTimeout(() => {
//         if (componentMounted) {
//           // Updated array with Home Care Service details
//           const productsArray = [
//             {
//               id: 1,
//               title: "Home Care Service",
//               description: "Comprehensive home care services for your needs.",
//               image: "https://d13iq96prksfh0.cloudfront.net/cdn/photos/375714/original.jpeg", // Replace with the actual image URL
//               price: 1500, // Adjust the price accordingly
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
//             // Add more products as needed
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
//           {/* ... (other buttons) */}
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
//                   <h5 className="card-title">{product.title}</h5>
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
//                   <Link to='/BookService'>
//                     <button style={{backgroundColor:"black"}}>
//                     Book now
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

const Service = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      // Simulating an API call delay
      setTimeout(() => {
        if (componentMounted) {
          // Updated array with Home Care Service details
          const productsArray = [
            {
              id: 1,
              title: "Home Care Service",
              description: "Comprehensive home care services for your needs.",
              image: "https://d13iq96prksfh0.cloudfront.net/cdn/photos/375714/original.jpeg", // Replace with the actual image URL
              price: 1500, // Adjust the price accordingly
              category: "Home Care Service",
              details: {
                provider: "HomeCare Pro",
                duration: "1 month",
                features: [
                  "Health assessments",
                  "Medication management",
                  "24/7 emergency support",
                ],
              },
            },
            {
              id: 2,
              title: "Electronics Repair Service",
              description: "Expert electronics repair and troubleshooting.",
              image: "https://optimoroute.com/wp-content/uploads/2020/10/Electronic-Repair-Hero-Blog.jpg",
              price: 800,
              category: "Electronics Service",
              details: {
                provider: "TechFix Solutions",
                duration: "48 hours",
                features: [
                  "Repair of all electronic devices",
                  "Diagnostic services",
                  "Quality spare parts",
                ],
              },
            },
            // Add more products as needed
            {
              id: 3,
              title: "Personal Assistant Service",
              description: "Your dedicated personal assistant for various tasks.",
              image: "https://www.welcomehomecare.com/wp-content/uploads/sites/360/2018/04/left-img.jpg",
              price: 1200,
              category: "Personal Assistant Service",
              details: {
                provider: "TaskMaster Assist",
                duration: "24 hours",
                features: [
                  "Appointment scheduling",
                  "Travel arrangements",
                  "Task prioritization",
                ],
              },
            }
          ];
          setData(productsArray);
          setFilter(productsArray);
          setLoading(false);
        }
      }, 1000);

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const filterProduct = (cat) => {
    if (cat === "All") {
      setFilter(data);
    } else {
      const updatedList = data.filter((item) => item.category === cat);
      setFilter(updatedList);
    }
  };
  const redirectToBookService = () => {
    // Check if the user is logged in (replace this with your authentication logic)
    const isLoggedIn = true; // Replace with your actual authentication check

    // Redirect to BookService if logged in, else redirect to Login
    if (isLoggedIn) {
      window.location.href = "/BookService";
    } else {
      window.location.href = "/Login"; // Replace with your login page route
    }
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("All")}>
            All
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("Home Care Service")}
          >
            Home Care Service
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("Electronics Service")}
          >
            Electronics Service
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("Personal Assistant Service")}
          >
            Personal Assistant Service
          </button>
          {/* ... (other buttons) */}
        </div>

        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                  <li className="list-group-item">
                    Provider: {product.details.provider}
                  </li>
                  <li className="list-group-item">
                    Duration: {product.details.duration}
                  </li>
                  <li className="list-group-item">
                    Features: {product.details.features.join(", ")}
                  </li>
                </ul>
                <div className="card-body">
                  <Link to='#'>
                    <button style={{ backgroundColor: "black" }} onClick={redirectToBookService}>
                      Book now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  // Dummy function to check if the user is logged in (replace with your logic)
  const isLoggedIn = () => {
    // Replace this with your actual authentication logic
    // For simplicity, returning true as a placeholder
    return true;
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
          {loading ? <p>Loading...</p> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Service;
