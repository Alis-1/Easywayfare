import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <span className="logo-text">Easywayfare</span>
                </Link>
                
                <button 
                    className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Avaa valikko"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-links">
                        <li>
                            <Link to="/" className={isActive('/')}>
                                Koti
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className={isActive('/about')}>
                                Tietoa
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className={isActive('/contact')}>
                                Yhteystiedot
                            </Link>
                        </li>
                        <li>
                            <Link to="/map" className={isActive('/map')}>
                                Kartta
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;