import React from 'react';
import '../App.css';

const AboutPage = () => {
  const features = [
    {
      id: 1,
      title: 'Helppo käyttö',
      description: 'Selkeä ja intuitiivinen käyttöliittymä tekee matkojen suunnittelusta helppoa ja nautinnollista.',
      icon: '🎯'
    },
    {
      id: 2,
      title: 'Laaja valikoima',
      description: 'Tuhansia matkakohteita ympäri maailmaa, jotta löydät juuri sinulle sopivan paikan.',
      icon: '🌍'
    },
    {
      id: 3,
      title: 'Luotettavat tiedot',
      description: 'Päivitettyjä ja tarkistettuja tietoja matkakohteista, majoituksista ja nähtävyyksistä.',
      icon: '✅'
    },
    {
      id: 4,
      title: 'Henkilökohtainen',
      description: 'Räätälöityjä matkavinkkejä sinun tarpeidesi ja mieltymyksiesi mukaan.',
      icon: '👤'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Matkakohteita' },
    { number: '50k+', label: 'Tytyväistä käyttäjää' },
    { number: '24/7', label: 'Tukea' },
    { number: '98%', label: 'Suositusaste' }
  ];

  return (
    <div className="about-page">
      {/* Hero-osio */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Meidän tarinamme</h1>
          <p>
            Easywayfare syntyi vuonna 2024 ajatuksesta tehdä matkojen suunnittelusta 
            helppoa ja nautinnollista kaikille. Yhdistämme modernin teknologian ja 
            matkailun kokemuksen tarjotaksemme sinulle parhaan mahdollisen alustan 
            seuraavan seikkailusi suunnitteluun.
          </p>
        </div>
      </section>

      {/* Ominaisuudet */}
      <section className="features-section">
        <h2>Miksi valita Easywayfare?</h2>
        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tilastot */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tiimi */}
      <section className="team-section">
        <h2>Meidän tiimimme</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image">
              <img src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png" alt="Perustaja" />
            </div>
            <h3>Matti Meikäläinen</h3>
            <p>Perustaja & CEO</p>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png" alt="Matkailuasiantuntija" />
            </div>
            <h3>Maija Matkustaja</h3>
            <p>Matkailuasiantuntija</p>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src="https://cdn-icons-png.flaticon.com/512/4140/4140049.png" alt="Tekninen johtaja" />
            </div>
            <h3>Teemu Tekninen</h3>
            <p>Tekninen johtaja</p>
          </div>
        </div>
      </section>

      {/* CTA-osio */}
      <section className="cta-section">
        <h2>Aloita matkailusi tänään</h2>
        <p>Liity tuhansien tytyväisten matkailijoiden joukkoon</p>
        <button className="cta-button">Aloita matkailusi</button>
      </section>
    </div>
  );
};

export default AboutPage;