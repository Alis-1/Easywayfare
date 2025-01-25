import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Easywayfare</div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Koti</Link></li>
                    <li><Link to="/about">Tietoa</Link></li>
                    <li><Link to="/contact">Yhteystiedot</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;