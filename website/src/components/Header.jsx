import React from 'react';
import '../styles/header.css';
import logo from '../assets/lentokone.png';

const Header = () => {
  return (
    <div className="header-background-card">
      <div className="header">
        <h1>Easywayfare</h1>
        <img src={logo} className="logo react" alt="React logo" />
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