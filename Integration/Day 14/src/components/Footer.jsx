// import React from "react";

// const Footer = () => {
//   return (
//     <>
//       <footer className="mb-0 text-center">
//         <div className="d-flex align-items-center justify-content-center pb-5">
//           <div className="col-md-6">
//             <p className="mb-3 mb-md-0">HealthCare
//             </p>
              
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center" style={{ backgroundColor: "black", color: "white" }}>
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">HealthCare &copy; {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
