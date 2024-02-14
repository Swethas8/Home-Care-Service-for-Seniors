// import React from "react";
// import { Footer, Navbar } from "../components";
// const ContactPage = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="container my-3 py-3">
//         <h1 className="text-center">Contact Us</h1>
//         <hr />
//         <div class="row my-4 h-100">
//           <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//             <form>
//               <div class="form my-3">
//                 <label for="Name">Name</label>
//                 <input
//                   type="email"
//                   class="form-control"
//                   id="Name"
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div class="form my-3">
//                 <label for="Email">Email</label>
//                 <input
//                   type="email"
//                   class="form-control"
//                   id="Email"
//                   placeholder="name@example.com"
//                 />
//               </div>
//               <div class="form  my-3">
//                 <label for="Password">Message</label>
//                 <textarea
//                   rows={5}
//                   class="form-control"
//                   id="Password"
//                   placeholder="Enter your message"
//                 />
//               </div>
//               <div className="text-center">
//                 <button
//                   class="my-2 px-4 mx-auto btn btn-dark"
//                   type="submit"
//                 >
//                   Send
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ContactPage;
import React, { useState } from 'react';
import {  Navbar } from '../components';

const ContactPage = () => {
  const initialMissionContent = `Get In Touch
  We Would Love to Help!
  Call Us Today!
  (949) 630-0487`;

  const [missionContent, setMissionContent] = useState(initialMissionContent);

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row">
          <div className="col-md-6">
            {/* Image with inline CSS */}
            <img
              src="https://img.freepik.com/premium-photo/healthcare-homecare-nurse-with-grandma-support-her-retirement-medical-old-age-caregiver-volunteer-trust-social-worker-helping-senior-woman-with-demantia-alzheimer_590464-84580.jpg"
              alt="About Us"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
          <div className="col-md-6">
            <div className="text-center py-4">
              <h2 style={{ paddingTop: "40px" }}>Contact Us for Better Care</h2>
              <p className="text-justify" style={{ paddingTop: "40px" }}>{missionContent}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
