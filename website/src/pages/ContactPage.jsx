import React, { useState } from 'react';
import '../App.css'; 

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tässä käsitellään lomakkeen lähetys
    console.log('Lomake lähetetty:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      {/* Hero-osio */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Ota yhteyttä</h1>
          <p>Olemme täällä auttamassa sinua matkailusi suunnittelussa</p>
        </div>
      </section>

      {/* Yhteystiedot ja lomake */}
      <section className="contact-section">
        <div className="contact-grid">
          {/* Yhteystiedot */}
          <div className="contact-info">
            <div className="info-box">
              <h2>Yhteystiedot</h2>
              <ul className="contact-list">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Joukahaisenkatu 3, 20520 Turku</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>+358 40 123 4567</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>info@easywayfare.fi</span>
                </li>
              </ul>
            </div>
      
      <div className="info-box">
              <h2>Sosiaalinen media</h2>
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

          {/* Yhteyslomake */}
          <div className="contact-form">
            <h2>Lähetä viesti</h2>
            <form onSubmit={handleSubmit} className="form-container">
              <div className="form-group">
                <label htmlFor="name">Nimi</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Sähköposti</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Aihe</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Viesti</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Lähetä viesti</button>
            </form>
          </div>
        </div>
      </section>

      {/* Kartta */}
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.808598517456!2d22.28459931578976!3d60.45115701778975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468ccef0e7d6907d%3A0x6c0d5d3b8c8c8c8c!2sJoukahaisenkatu%203%2C%2020520%20Turku!5e0!3m2!1sfi!2sfi!4v1625760000000!5m2!1sfi!2sfi"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sijainti kartalla"
        ></iframe>
      </section>
   </div>
  );
};

export default ContactPage;