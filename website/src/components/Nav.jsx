import React from 'react';
import './styles/nav.css';

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Web-sovellukseni</div>
            <ul className="navbar-menu">
                <li><a href="#home">Koti</a></li>
                <li><a href="#about">Tietoa</a></li>
                <li><a href="#contact">Yhteystiedot</a></li>
                <li><a href="#map">MapTest</a></li>
            </ul>
        </nav>
    );
};

export default Nav;