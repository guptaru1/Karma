import React from 'react';
import './styles.css';

const Header = () => (
  <header className="header">
    <div className="header-content">
      <img src="images/Karma.png" alt="Karma Logo" className="header-image" />
      <h1><span style={{ color: 'white' }}>K</span>aRma</h1>
    </div>
  </header>
);

export default Header;