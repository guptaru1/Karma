import React, { useState } from 'react';
import './styles.css'; // Ensure this file exists

const EnvelopeLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="envelope-container">
      <div 
        className={`envelope ${isOpen ? 'open' : ''}`}
        onClick={toggleEnvelope}
      >
        <div className="flap"></div>
        <div className={`front ${isOpen ? 'hidden' : ''}`}>
          <div className="united">
            <span>Open Letter</span>
          </div>
        </div>
        <div className="letter">
          <h1>Music</h1>
          <div className="heart"></div>
          <p>Food and music are two things which surpass borders.</p>
          <p>Which is why with every bottled drink we sell, we want to include a QR code linking to a song suggested by one of our customers for the whole world to listen to.</p>
          <p>Each week, we will have a new song to help unite us accompanied with a custom handwritten letter.</p>
        </div>
      </div>
    </div>
  );
};

export default EnvelopeLetter;