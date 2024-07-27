
import React from 'react';
import './AboutUsSection.css'; // Import the CSS file for styles
import JUICE from './JUICE';
import Menu from './Menu';

const Products = () => {
    return (
        <div>
        <section id="crema-pastel-section" className="crema-pastel-section">
        <div className="section-content">
            <JUICE/>
        </div>
        </section>
        <section id="white-section" className="white-section">
        <div className="section-content">
        <h2 style={{ marginTop: '5%' }}>Our Menu</h2>
        <p>Experience the finest drinks and desserts made with love and passion.</p>
        <Menu/>
        </div>
        </section>
        </div>

    );
};

export default Products;