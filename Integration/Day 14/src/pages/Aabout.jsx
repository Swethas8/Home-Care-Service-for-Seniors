import React, { useState } from 'react';
import { ANavbar, Footer, Navbar } from '../components';
const Aabout = () => {
  const initialMissionContent = `It all started with an unshakeable optimism to provide
    world-class, concierge-level care to your loved ones. Golden Age
    Companions believes in combining people and technology to offer
    the highest level of home care services that you can count on.
    Our aim is to empower our employees, clients, and their loved
    ones with compassion, compatibility, and safety.`;

  const [missionContent, setMissionContent] = useState(initialMissionContent);
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };
  const handleSaveClick = () => {
    setEditMode(false);
    // Save changes to your backend or wherever needed
  };
  return (
    <>
      <ANavbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <div className="row">
          <div className="col-md-6">
            {/* Image with inline CSS */}
            <img
              src="https://assets-global.website-files.com/6210b743b169428e0ac99406/6210b743b169427e0dc9943c_AdobeStock_182526891-p-1080.jpeg"
              alt="About Us"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
          <div className="col-md-6">
            <div className="text-center py-4">
              <h2 style={{ paddingTop: "40px" }}>Our Mission for Better Care</h2>
              {editMode ? (
                <textarea
                  value={missionContent}
                  onChange={(e) => setMissionContent(e.target.value)}
                  className="form-control"
                  style={{ paddingTop: "40px", minHeight: "150px" }}
                />
              ) : (
                <p className="text-justify" style={{ paddingTop: "40px" }}>{missionContent}</p>
              )}
              <div className="text-center mt-4">
                {editMode ? (
                  <button onClick={handleSaveClick} className="btn btn-success mr-2">Save</button>
                ) : (
                  <button onClick={handleEditClick} className="btn btn-primary mr-2">Edit</button>
                )}
                <button className="btn btn-secondary">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        {/* List of services below Our Mission */}
        <h2 className="text-center py-4">Our Services</h2>
        <div className="row">
          {/* ... rest of the code */}
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPviWq2g5ZfhHna4RZL837FNa_7YbCQcCVA&usqp=CAU"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Home Cleaning</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs94_XlJ-C5BTIlZKD6ny0eJk201k7SiVaCA&usqp=CAU" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Senior</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://home-nursing.care/assets/images/1-senior-citizen-care-taker-in-jaipur.webp" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Personal caretaker</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
          {/* Add your other card components here */}
        </div>
      </div>
    </>
  );
};
export default Aabout;

