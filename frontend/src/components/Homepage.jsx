import { useRef } from 'react';
import './componentsCSS/Homepage.css';
import heartbeatLogo from './heartbeat.png';
import DP from './componentsCSS/DP.jpeg';
import React, { useState } from 'react';

function Homepage({ name }) {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const symptoms = [
    "Fever", "Cough", "Sore throat", "Runny nose", "Nasal congestion",
    "Fatigue", "Headache", "Muscle aches (Myalgia)", "Joint pain (Arthralgia)", "Shortness of breath (Dyspnea)",
    "Chest pain", "Nausea", "Vomiting", "Diarrhea", "Constipation",
    "Abdominal pain", "Heartburn", "Dizziness", "Weakness", "Chills",
    "Sweating (Night sweats)", "Skin rash", "Itching (Pruritus)", "Swelling (Edema)", "Numbness or tingling (Paresthesia)",
    "Loss of smell (Anosmia)", "Loss of taste (Ageusia)", "Blurred vision", "Red or itchy eyes", "Frequent urination",
    "Painful urination (Dysuria)", "Back pain", "Weight loss (Unintentional)", "Weight gain (Unintentional)", "Sleep disturbances (Insomnia)",
    "Anxiety", "Depression", "Palpitations (Irregular or fast heartbeat)", "Cramps (Menstrual or muscle)", "Difficulty swallowing (Dysphagia)"
  ];

  return (
    <div className="homepage-container">
      <nav className="navbar">
        <div className="brand">
          <img 
            src={heartbeatLogo}
            alt="Symptosense Logo" 
            className="brand-logo"
          />
          <h1 className="brand-name">Symptosense</h1>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search symptoms..."
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>

        <div className="profile">
          <img 
            src={DP}
            alt="Profile" 
            className="profile-pic"
          />
        </div>
      </nav>

      <div className="main-content">
        <h1 className="welcome-text" style={{marginBottom:'7vh'}}>Welcome {name}!</h1>
        <p className="feeling-text" style={{ fontSize: '1.5rem',  textAlign: 'left', marginLeft : '10vw', color : 'black' }}>Are you experiencing any of these symptoms?</p>
        
        {/* First Scrollable Card Container */}
        <div className="card-wrapper" style={{ marginTop: '10px' }}>
          {/* <button className="scroll-button left" onClick={() => scrollLeft(scrollRef1)}>&lt;</button> */}
          <div className="card-container" ref={scrollRef1}>
            {symptoms.slice(0, 20).map((symptom, index) => (
              <div className="card small-card" key={index}>{symptom}</div>
            ))}
          </div>
          {/* <button className="scroll-button right" onClick={() => scrollRight(scrollRef1)}>&gt;</button> */}
        </div>

        {/* Second Scrollable Card Container */}
        <div className="card-wrapper" style={{ marginTop: '0px' }}>
          {/* <button className="scroll-button left" onClick={() => scrollLeft(scrollRef2)}>&lt;</button> */}
          <div className="card-container" ref={scrollRef2}>
            {symptoms.slice(20).map((symptom, index) => (
              <div className="card small-card" key={index + 20}>{symptom}</div>
            ))}
          </div>
          {/* <button className="scroll-button right" onClick={() => scrollRight(scrollRef2)}>&gt;</button> */}
        </div>
        <div className="descEntry"  onClick={() => setShowModal(true)}>
            <span>Your symptoms are not listed above? <br />Then describe them to us!</span>
            <span className="plus-icon">+</span>
        </div>
        
        {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Describe Your Symptoms</h2>
                        <textarea id="symptomInput" name="symptomInput" placeholder="Enter your symptoms here..."></textarea>
                        <div className="modal-buttons">
                            <button onClick={() => setShowModal(false)}>Close</button>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            )}

      </div>
    </div>
  );
}

export default Homepage;
