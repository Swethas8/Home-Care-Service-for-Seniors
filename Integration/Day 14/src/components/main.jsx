import React from "react";

const Home = () => {
  const mainImg='https://www.alzdiscovery.org/uploads/blog_hero_images/_lg/ADDF-Caregiver-Taking-Care-of-Yourself-and-Your--Loved-One--During-the--COVID-19--Outbreak.jpg';
  return (
    <>
    
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={mainImg}
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter" style={{color:"black",paddingRight:'65%'}}>Home Care Services</h5>
              <br></br>
              <p className="card-text fs-5 d-none d-sm-block " style={{color:"black",paddingRight:'65%'}}>
                Welcome to our website
              </p>
            </div>
          </div>
          
        </div>
      </div>
      
    </>
  );
};

export default Home;

