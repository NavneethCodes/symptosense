import React from 'react';
import { useNavigate } from 'react-router-dom';
import './componentsCSS/DescEntry.css';

function DescEntry() {
  const navigate = useNavigate();

  return (
    <div className="describe-container">
      <nav className="navbar">
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
        <h1>Describe Your Symptoms</h1>
      </nav>
      
      <div className="input-area">
        <textarea
          id="symptomInput"
          name="symptomInput"
          placeholder="Enter your symptoms here..."
          className="symptom-textarea"
        ></textarea>
        
        <div className="modal-buttons">
          <button onClick={() => navigate(-1)}>Cancel</button>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default DescEntry;
