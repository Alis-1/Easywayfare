import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us!</p>
      <p>Our office is open: Mo-Thu 8am - 5pm</p>
      
      <div className="info-box">
        <h2>Contact Information</h2>
        <ul>
          <li>Email: contact@easywayfare.com</li>
          <li>Phone: +358 123 456 789</li>
          <li>Address: 123 Läntinen pitkäkatu, Turku, Finland</li>
        </ul>
    </div>
   </div>
  );
};

export default ContactPage;