import React from 'react';
import '../App.css';

const ContactPage = () => {
  return (
    <div className="page-container">
      <div className="contact-page">
        <h1 className="page-title">Ota yhteyttä</h1>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-box">
              <h2>Yhteystiedot</h2>
              <ul className="contact-list">
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>Email: contact@easywayfare.com</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>Puhelin: +358 123 456 789</span>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Osoite: 123 Läntinen pitkäkatu, Turku, Suomi</span>
                </li>
              </ul>
            </div>

            <div className="info-box">
              <h2>Aukioloajat</h2>
              <ul className="opening-hours">
                <li>Ma - To: 8:00 - 17:00</li>
                <li>Pe: 8:00 - 16:00</li>
                <li>La - Su: Suljettu</li>
              </ul>
            </div>
          </div>

          <div className="contact-form">
            <h2>Lähetä viesti</h2>
            <form className="form-container">
              <div className="form-group">
                <label htmlFor="name">Nimi</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Sähköposti</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Viesti</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-button">Lähetä</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;