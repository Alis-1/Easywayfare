import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <div className="header-background-card">
    <div className="header">
      <h1>Easywayfare</h1>
        <div className="nav">
        <ul>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Header;