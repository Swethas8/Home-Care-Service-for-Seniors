// AddField.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/AddField.css"; // Import the CSS file

const AddField = ({ onSave, onCancel }) => {
  const [newField, setNewField] = useState({ label: "", type: "" });

  const handleSave = () => {
    // Add logic to save the new field
    onSave(newField);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div id="AddField">
      <h1>Add New Field</h1>
      <label htmlFor="newFieldLabel">Label</label>
      <input
        type="text"
        className="input-field"
        id="newFieldLabel"
        value={newField.label}
        onChange={(e) => setNewField({ ...newField, label: e.target.value })}
      />
      <label htmlFor="newFieldType">Type</label>
      <input
        type="text"
        className="input-field"
        id="newFieldType"
        value={newField.type}
        onChange={(e) => setNewField({ ...newField, type: e.target.value })}
      />
      <div className="btn-container">
        <button onClick={handleSave} className="btn-save">
          Save Field
        </button>
        <Link to="/AContact" className="btn-cancel">
          <button onClick={handleCancel}>Cancel</button>
        </Link>
      </div>
    </div>
  );
};

export default AddField;
