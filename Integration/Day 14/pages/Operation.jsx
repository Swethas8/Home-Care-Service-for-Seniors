// import { Link } from "react-router-dom";
// import '../assest/css/Operation.css';
// import { ANavbar } from "../components";
// function Operation() {
//     return ( 
      
//         <div className="hero-content-area">
//         <h1>Empowering Aging Gracefully: Your Home, Your Health, Our Care</h1>
//         <h3>Tailored Home Care Solutions for Every Senior Journey</h3>
//         <p className='heading'>SERVICES</p>
//         <Link to="/Postserv"><a  className="btn">POST SERVICES</a></Link>
//         <Link to="/EditServ"><a  className="btn">EDIT SERVICES</a></Link>
//         <Link to="/DeleteServ"><a className="btn">DELETE SERVICES</a></Link>
//         <Link to="/ViewServ"><a  className="btn">VIEW SERVICES</a></Link>   
//         <br></br>
//         <p className='heading1'>BOOKINGS</p>
//         <Link to="/ViewBooking"><a  className="btn">VIEW BOOKINGS</a></Link>
//         <Link to="/ChangeStat"><a  className="btn">CHANGE STATUS</a></Link>
//       </div>
//      );
// }

// export default Operation;
import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/Operation.css';
import ANavbar from "../components/ANavbar";  // Import ANavbar component

function Operation() {
  return ( 
    <div>
      <ANavbar /> {/* Include ANavbar component */}
      <div className="hero-content-area" style={{paddingTop:"10%"}}>
        <h1>Empowering Aging Gracefully: Your Home, Your Health, Our Care</h1>
        <h3>Tailored Home Care Solutions for Every Senior Journey</h3>
        <p className='heading'>SERVICES</p>
        <Link to="/Postserv"><a className="btn">POST SERVICES</a></Link>
        {/* <Link to="/EditServ"><a className="btn">EDIT SERVICES</a></Link>
        <Link to="/DeleteServ"><a className="btn">DELETE SERVICES</a></Link> */}
        <Link to="/ViewServ"><a className="btn">VIEW SERVICES</a></Link>   
        <br></br>
        <p className='heading1'>BOOKINGS</p>
        <Link to="/ViewBooking"><a className="btn">VIEW BOOKINGS</a></Link>
        <Link to="/ChangeStat"><a className="btn">CHANGE STATUS</a></Link>
      </div>
    </div>
  );
}

export default Operation;
