import React from 'react';
import Carousel from './Carousel';
import './styles.css';

const images = [
  {
    image: "images/ladoo.png",
    text: 'Protein Ladoo',
  },
  {
    image: "images/cumin.png",
    text: 'Cumin water',
  },

  {
    image: "images/kanji.png",
    text: 'Probiotic drink',
  },
  {
    image: "images/celery.png",
    text: 'Celery juice',
  },



];

const Menu = () => {
  return (
    <div>
        &nbsp;
        &nbsp;
     <Carousel items={images} />

     <div className="signup-section">
      <h2>Want to Sign Up for Our Launch?</h2>
      <p>Drop your email below:</p>
      <form className="signup-form">
        <input
          type="email"
          placeholder="Enter your email"
          className="email-input"
          required
        />
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
    </div>

    </div>
  );
};

export default Menu;
