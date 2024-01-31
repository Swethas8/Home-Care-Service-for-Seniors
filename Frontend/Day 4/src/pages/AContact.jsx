import React, { useState } from "react";
import { Footer, Navbar } from "../components";

const AContact = () => {
  const [isMessageSent, setMessageSent] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add any form submission logic here
    // For now, we'll just set the message sent state to true
    setMessageSent(true);
  };

  return (
    <>
    <center>
      <div style={{ margin: "0", fontFamily: "Arial, sans-serif",width:"700px" }}>
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "5px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", margin: "10vh auto", maxWidth: "500px" }}>
          {isMessageSent && (
            <div style={{ marginBottom: "20px" }} className="alert alert-success" role="alert">
              Message sent successfully!
            </div>
          )}
          <h1 style={{ textAlign: "center" }}>Contact Us</h1>
          <hr />
          <div style={{ marginBottom: "20px" }} className="row my-4 h-100">
            <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
              <form onSubmit={handleFormSubmit}>
                <div style={{ marginBottom: "20px" }} className="form my-3">
                  <label htmlFor="Name">Name</label>
                  <input
                    type="text"
                    style={{ width: "200px", padding: "15px", borderRadius: "4px", border: "1px solid #ddd" }}
                    id="Name"
                    placeholder="Enter your name"
                  />
                </div>
                <div style={{ marginBottom: "20px" }} className="form my-3">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="email"
                    style={{ width: "200px", padding: "15px", borderRadius: "4px", border: "1px solid #ddd" }}
                    id="Email"
                    placeholder="name@example.com"
                  />
                </div>
                <div style={{ marginBottom: "20px" }} className="form my-3">
                  <label htmlFor="Message">Message</label>
                  <textarea
                    rows={5}
                    style={{ width: "200px", padding: "15px", borderRadius: "4px", border: "1px solid #ddd" }}
                    id="Message"
                    placeholder="Enter your message"
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <button
                    type="submit"
                    style={{ backgroundColor: "#3498db", color: "#fff", padding: "15px 20px", border: "none", borderRadius: "4px", cursor: "pointer" }}
                    className="my-2 px-4 mx-auto btn btn-dark"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </center>
    </>
  );
};

export default AContact;
