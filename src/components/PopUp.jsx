import React from 'react';
import './Popup.css';

const PopUp = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Hi!</h2>
        <p>I'm here to help you with any questions you might have.</p>
        <p>How can I help you today?</p>
        <div className="popup-options">
          <button>Looking for your old portfolio</button>
          <button>Just saying hello!</button>
          <button>Interested in mentorship</button>
          <button>We'd like to hire you</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
