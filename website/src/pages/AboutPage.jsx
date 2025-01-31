import React from 'react';
import '../App.css'; 
import Logo from '../components/Logo';
import useFetch from '../hooks/UseFetch';
const AboutPage = () => {
  return (
    <div className="about-page">
      <Logo /> 
      <h1>About Easywayfare</h1>
      <p>We provide you an Easy Way to explore the world, while keeping the Fares low.</p>
      <p>Our mission is to inspire and help travelers around the globe explore with confidence and ease. </p>

      <h2>Why us?</h2>
      <p>We offer our customers the best tips & advice on the industry. It does not matter where you're at!
        We have your back where ever your travels lead you!</p>

        <h3>Who are we?</h3>
        <p>Our team at Easywayfare consists of travelers, experts and culinarists and more to ensure that 
          every guide gives you everything you've wished for from your trip!</p>
        <p>Every guide is put together by our team on site to ensure a magical experience!</p>
    </div>
  );
};

export default AboutPage;