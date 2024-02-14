// // import React, { useEffect, useState } from "react";
// // import Skeleton from "react-loading-skeleton";
// // import { Link, useParams } from "react-router-dom";
// // import Marquee from "react-fast-marquee";
// // import { useDispatch } from "react-redux";
// // import { addCart } from "../redux/action";

// // import { Footer, Navbar } from "../components";

// // const Product = () => {
// //   const { id } = useParams();
// //   const [product, setProduct] = useState([]);
// //   const [similarProducts, setSimilarProducts] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [loading2, setLoading2] = useState(false);

// //   const dispatch = useDispatch();

// //   const addProduct = (product) => {
// //     dispatch(addCart(product));
// //   };

// //   useEffect(() => {
// //     const getProduct = async () => {
// //       setLoading(true);
// //       setLoading2(true);
// //       const response = await fetch(`https://fakestoreapi.com/products/${id}`);
// //       const data = await response.json();
// //       setProduct(data);
// //       setLoading(false);
// //       const response2 = await fetch(
// //         `https://fakestoreapi.com/products/category/${data.category}`
// //       );
// //       const data2 = await response2.json();
// //       setSimilarProducts(data2);
// //       setLoading2(false);
// //     };
// //     getProduct();
// //   }, [id]);

// //   const Loading = () => {
// //     return (
// //       <>
// //         <div className="container my-5 py-2">
// //           <div className="row">
// //             <div className="col-md-6 py-3">
// //               <Skeleton height={400} width={400} />
// //             </div>
// //             <div className="col-md-6 py-5">
// //               <Skeleton height={30} width={250} />
// //               <Skeleton height={90} />
// //               <Skeleton height={40} width={70} />
// //               <Skeleton height={50} width={110} />
// //               <Skeleton height={120} />
// //               <Skeleton height={40} width={110} inline={true} />
// //               <Skeleton className="mx-3" height={40} width={110} />
// //             </div>
// //           </div>
// //         </div>
// //       </>
// //     );
// //   };

// //   const ShowProduct = () => {
// //     return (
// //       <>
// //         <div className="container my-5 py-2">
// //           <div className="row">
// //             <div className="col-md-6 col-sm-12 py-3">
// //               <img
// //                 className="img-fluid"
// //                 src={product.image}
// //                 alt={product.title}
// //                 width="400px"
// //                 height="400px"
// //               />
// //             </div>
// //             <div className="col-md-6 col-md-6 py-5">
// //               <h4 className="text-uppercase text-muted">{product.category}</h4>
// //               <h1 className="display-5">{product.title}</h1>
// //               <p className="lead">
// //                 {product.rating && product.rating.rate}{" "}
// //                 <i className="fa fa-star"></i>
// //               </p>
// //               <h3 className="display-6  my-4">${product.price}</h3>
// //               <p className="lead">{product.description}</p>
// //               <button
// //                 className="btn btn-outline-dark"
// //                 onClick={() => addProduct(product)}
// //               >
// //                 Add to Cart
// //               </button>
// //               <Link to="/cart" className="btn btn-dark mx-3">
// //                 Go to Cart
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </>
// //     );
// //   };

// //   const Loading2 = () => {
// //     return (
// //       <>
// //         <div className="my-4 py-4">
// //           <div className="d-flex">
// //             <div className="mx-4">
// //               <Skeleton height={400} width={250} />
// //             </div>
// //             <div className="mx-4">
// //               <Skeleton height={400} width={250} />
// //             </div>
// //             <div className="mx-4">
// //               <Skeleton height={400} width={250} />
// //             </div>
// //             <div className="mx-4">
// //               <Skeleton height={400} width={250} />
// //             </div>
// //           </div>
// //         </div>
// //       </>
// //     );
// //   };

// //   const ShowSimilarProduct = () => {
// //     return (
// //       <>
// //         <div className="py-4 my-4">
// //           <div className="d-flex">
// //             {similarProducts.map((item) => {
// //               return (
// //                 <div key={item.id} className="card mx-4 text-center">
// //                   <img
// //                     className="card-img-top p-3"
// //                     src={item.image}
// //                     alt="Card"
// //                     height={300}
// //                     width={300}
// //                   />
// //                   <div className="card-body">
// //                     <h5 className="card-title">
// //                       {item.title.substring(0, 15)}...
// //                     </h5>
// //                   </div>
// //                   {/* <ul className="list-group list-group-flush">
// //                     <li className="list-group-item lead">${product.price}</li>
// //                   </ul> */}
// //                   <div className="card-body">
// //                     {/* <Link
// //                       to={"/product/" + item.id}
// //                       className="btn btn-dark m-1"
// //                     >
// //                       Book Now
// //                     </Link> */}
// //                     <button
// //                       className="btn btn-dark m-1"
// //                       onClick={() => addProduct(item)}
// //                     >
// //                       Add to Cart
// //                     </button>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </>
// //     );
// //   };
// //   return (
// //     <>
// //       <Navbar />
// //       <div className="container">
// //         <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
// //         <div className="row my-5 py-5">
// //           <div className="d-none d-md-block">
// //           <h2 className="">You may also Like</h2>
// //             <Marquee
// //               pauseOnHover={true}
// //               pauseOnClick={true}
// //               speed={50}
// //             >
// //               {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
// //             </Marquee>
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // };

// // export default Product;
// import React, { useEffect, useState } from "react";
// import { useLocation } from 'react-router-dom';
// import { Link, useParams } from "react-router-dom";
// import Marquee from "react-fast-marquee";
// import { Footer, Navbar } from "../components";
// import ProductDetails from "../components/ProductDetails";

// const Product = () => {
//   const location = useLocation();
//   const { product } = location.state;

//   const { id } = useParams();
//   const [product, setProduct] = useState({});
//   const [similarProducts, setSimilarProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [loading2, setLoading2] = useState(false);

//   // Sample product array (you can replace it with your own data)
//   // Sample product array for Product.js
// const productArray = [
//   {
//     id: 1,
//     title: "Home Care Service",
//     description: "Comprehensive home care services for your needs.",
//     image: "https://d13iq96prksfh0.cloudfront.net/cdn/photos/375714/original.jpeg",
//     price: 1500,
//     category: "Home Care Service",
//     details: {
//       provider: "HomeCare Pro",
//       duration: "1 month",
//       features: [
//         "Health assessments",
//         "Medication management",
//         "24/7 emergency support",
//       ],
//     },
//   },
//   {
//     id: 2,
//     title: "Electronics Repair Service",
//     description: "Expert electronics repair and troubleshooting.",
//     image: "https://optimoroute.com/wp-content/uploads/2020/10/Electronic-Repair-Hero-Blog.jpg",
//     price: 800,
//     category: "Electronics Service",
//     details: {
//       provider: "TechFix Solutions",
//       duration: "48 hours",
//       features: [
//         "Repair of all electronic devices",
//         "Diagnostic services",
//         "Quality spare parts",
//       ],
//     },
//   },
//   {
//     id: 3,
//     title: "Personal Assistant Service",
//     description: "Your dedicated personal assistant for various tasks.",
//     image: "https://www.welcomehomecare.com/wp-content/uploads/sites/360/2018/04/left-img.jpg",
//     price: 1200,
//     category: "Personal Assistant Service",
//     details: {
//       provider: "TaskMaster Assist",
//       duration: "24 hours",
//       features: [
//         "Appointment scheduling",
//         "Travel arrangements",
//         "Task prioritization",
//       ],
//     },
//   },
//   // Add more products as needed
// ];



//   useEffect(() => {
//     const getProduct = async () => {
//       setLoading(true);
//       setLoading2(true);

//       // Simulating an API call delay
//       setTimeout(() => {
//         const selectedProduct = productArray.find((p) => p.id.toString() === id);
//         setProduct(selectedProduct || {});
//         setLoading(false);

//         // Simulating similar products (you can modify this as needed)
//         const filteredSimilarProducts = productArray.filter(
//           (p) => p.category === (selectedProduct?.category || "")
//         );
//         setSimilarProducts(filteredSimilarProducts);
//         setLoading2(false);
//       }, 1000);
//     };

//     getProduct();
//   }, [id]);

//   const ShowProduct = () => {
//     return (
//       <>
//         <ProductDetails product={product} addProduct={() => {}} />
//       </>
//     );
//   };

//   const ShowSimilarProduct = () => {
//     return (
//       <>
//         {similarProducts.map((product) => (
//           <div key={product.id} className="card text-center mx-4">
//             <img
//               className="card-img-top p-3"
//               src={product.image}
//               alt="Card"
//               height={300}
//               width={300}
//             />
//             <div className="card-body">
//               <h5 className="card-title">{product.title}</h5>
//               <p className="card-text">{product.description}</p>
//             </div>
//             <ul className="list-group list-group-flush">
//               <li className="list-group-item lead">$ {product.price}</li>
//               <li className="list-group-item">
//                 Provider: {product.details.provider}
//               </li>
//               <li className="list-group-item">
//                 Duration: {product.details.duration}
//               </li>
//               <li className="list-group-item">
//                 Features: {product.details.features.join(", ")}
//               </li>
//             </ul>
//             <div className="card-body">
//               <Link to={`/product/${product.id}`} className="btn btn-dark m-1">
//                 View Details
//               </Link>
//             </div>
//           </div>
//         ))}
//       </>
//     );
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <div className="row">{loading ? <p>Loading...</p> : <ShowProduct />}</div>
//         <div className="row my-5 py-5">
//           <div className="d-none d-md-block">
//             <h2 className="">You may also Like</h2>
//             <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
//               {loading2 ? <p>Loading similar products...</p> : <ShowSimilarProduct />}
//             </Marquee>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Product;
