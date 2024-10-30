import React from 'react';
import './Logo.css'; // Import the CSS file for styling
import logo from '../img/Logo.png'; // Import the image file

const Logo = () => {
  return (
    <div className="logo-container">
      <img 
        src={logo} // Use the imported image
        alt="Logo"
        className="logo" // Class for additional styling if needed
      />
    </div>
  );
};

export default Logo;
