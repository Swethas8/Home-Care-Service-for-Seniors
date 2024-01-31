import React from 'react';
import { NavLink } from 'react-router-dom';

const ANavbar = () => {
  const img1 = "your_privacy_policy_url";
  const img2 = "your_terms_conditions_url";
  const img3 = "your_faq_url";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        <img src='https://t3.ftcdn.net/jpg/02/66/46/32/360_F_266463210_KHs611ZFksCWBFOQBhvWhCDgplp5soB2.jpg' alt="" height={70} />
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> Health Care </NavLink>
        <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/AHome">Home </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Aabout">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/AContact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Operation">Action</NavLink>
            </li>
          </ul>
          <div className="buttons text-center">
            <NavLink to="/AdminLogin" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ANavbar;
