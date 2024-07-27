import React from 'react';
import './AboutUsSection.css'; // Import the CSS file for styles

const JUICE = () => {
    return (
        <section className="about-us">
            <div className="container">
                <img src="images/matcha.jpg" alt="Corner Shop" className="shop-image" />
                <div className="text-content">
                    <h1>We make sugar-free, protein packed desserts AND delicious drinks</h1>
                    <p>Discover the best of our corner shop with a variety of products and a friendly atmosphere. We’re dedicated to bringing you quality goods and exceptional service. Explore our store and find everything you need right around the corner!</p>
                    
                </div>
            </div>
        </section>
    );
};

export default JUICE;

/* <a href="/about-us" className="btn-about-us">About Us</a> */