import React, { useState, useEffect } from 'react';
import './styles.css';

const HandwrittenArticle = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the visibility to allow each line to animate
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust the delay as needed
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="article">
      <h1 className={`handwritten ${isVisible ? 'visible' : ''}`}>The Art of Ayurveda</h1>
      <p className={`handwritten ${isVisible ? 'visible' : ''}`}>
        Ayurveda, the ancient Indian system of medicine, has been practiced for thousands of years and continues to be a cornerstone of holistic health and wellness. This time-honored tradition offers a wealth of benefits that can improve both physical and mental well-being. Here, we explore the benefits of Ayurveda and how we plan to incorporate its principles into our offerings.
      </p>
      <h2 className={`handwritten ${isVisible ? 'visible' : ''}`}>Benefits of Ayurveda</h2>
      <p className={`handwritten ${isVisible ? 'visible' : ''}`}>
        1. <b>Holistic Health</b>: Ayurveda promotes a balanced approach to health, focusing on the harmony between the body, mind, and spirit. This holistic perspective ensures that all aspects of a person's well-being are considered and nurtured.
      </p>

      <p className={`handwritten ${isVisible ? 'visible' : ''}`}>
        2. <b>Cu water</b>: Water stored in copper vessels is believed to be "purified" and can help balance the doshas, particularly Pitta dosha, due to copper's cooling and soothing properties. In addition to this, cumin-stored water is traditionally used to support digestive health, relieve bloating, and improve overall digestion.
      </p>
      {/* Add more content here with the same pattern */}
    </div>
  );
};

export default HandwrittenArticle;