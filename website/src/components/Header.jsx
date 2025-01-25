import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Easywayfare</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;