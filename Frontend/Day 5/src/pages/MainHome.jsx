import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assest/css/MainHome.css';

const MainHome = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  return (
  <center>
    <div className="main-page-container">
      <h2>Welcome to the Application!</h2>

      <div>
        <Link to="/AdminLogin">
          <button
            onClick={() => handleRoleSelection('admin')}
            className="role-button">
            Admin
          </button>
        </Link>

        <Link to="/Login">
          <button
            onClick={() => handleRoleSelection('user')}
            className="role-button">
            User
          </button>
        </Link>
      </div>
    </div>
    </center>
  );
};

export default MainHome;
