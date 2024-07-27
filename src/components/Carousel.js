import React, { useState } from 'react';
import './styles.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!items || items.length === 0) {
    return <div className="carousel">No items to display</div>;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrev}>
        &#10094;
      </button>
      <div className="carousel-images">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-image ${index === currentIndex ? 'visible' : 'hidden'}`}
          >
            <img src={item.image} alt={`Slide ${index + 1}`} />
            <div className="carousel-text">{item.text}</div>
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;