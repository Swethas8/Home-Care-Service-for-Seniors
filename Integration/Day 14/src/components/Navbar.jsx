// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//     const state = useSelector(state => state.handleCart)
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
//             <div className="container">
//                 <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> Health Care </NavLink>
//                 <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav m-auto my-2 text-center">
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/">Home </NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/Service">Service</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/about">About</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/contact">Contact</NavLink>
//                         </li>
//                     </ul>
//                     <div className="buttons text-center">
//                         <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
//                         <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
//                         <NavLink to="/Booking" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Booking  </NavLink>
//                     </div>
//                 </div>


//             </div>
//         </nav>
//     )
// }

// export default Navbar
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <img src='https://t3.ftcdn.net/jpg/02/66/46/32/360_F_266463210_KHs611ZFksCWBFOQBhvWhCDgplp5soB2.jpg' alt="" height={70} style={{borderRadius:"60%"}}/>
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> Health Care </NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Home">Home </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/Service">Service</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        
                        
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                        {/* <NavLink to="/BookService" className="btn btn-outline-dark m-2"><i className="fa-solid fa-book"></i> BookService  </NavLink>
                        <NavLink to="/MyBooking" className="btn btn-outline-dark m-2"><i className="fa fa-list"></i> MyBooking  </NavLink> */}

                    </div>
                </div>
            </div>
        </nav>
       
    );
}

export default Navbar;
