import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Tietoa meistä</h3>
            <ul className="footer-links">
              <li><Link to="/about">Tietoa palvelusta</Link></li>
              <li><Link to="/contact">Ota yhteyttä</Link></li>
              <li><Link to="/map">Kartta</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Oikeudellinen</h3>
            <ul className="footer-links">
              <li><Link to="/privacy">Tietosuojakäytäntö</Link></li>
              <li><Link to="/terms">Käyttöehdot</Link></li>
              <li><Link to="/cookies">Evästekäytäntö</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Seuraa meitä</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Easywayfare. Kaikki oikeudet pidätetään.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;