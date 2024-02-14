import React, { useState } from 'react';
import { ANavbar, Footer, Navbar } from '../components';
const AContact = () => {
  const initialMissionContent = `Get In Touch
  We Would Love to Help!
  Call Us Today!
  (949) 630-0487`;

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
    
        </div>

    </>
  );
};
export default AContact;



