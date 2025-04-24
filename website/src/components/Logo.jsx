import React from 'react';
import yourLogo from '../assets/your_logo.png';
import '../styles/Logo.css'; // Updated path to Logo.css

function Logo() {
  return (
    <img src={yourLogo} alt="Your Logo" className="logo" />
  );
}

export default Logo;