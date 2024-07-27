import React from 'react';
import './styles.css'; // Import the CSS file for styling

const products = [
  {
    id: 1,
    name: 'Samaso Lover',
    price: '$20',
    imageUrl: 'images/samaso.png', // Placeholder image URL
  },
  {
    id: 2,
    name: 'Masala chai girls',
    price: '$25',
    imageUrl: 'images/Masala-chai.png', // 
  },
  {
    id: 3,
    name: 'Jab we Met girls',
    price: '$25',
    imageUrl: 'images/favorite-hoon.png', // Placeholder image URL
  },
];

const Merch = () => {
  return (
    <div className="merch-container">
      {products.map((product) => (
        <div key={product.id} className="merch-item">
          <img src={product.imageUrl} alt={product.name} className="merch-image" />
          <div className="merch-info">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Merch;