import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MapPage from './pages/MapPage';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import './App.css';

// Sivun siirtymäanimaatio
const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className={`page-transition ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
      {children}
    </div>
  );
};

function App() {
  const [theme, setTheme] = useState('light');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className={`app ${theme}`}>
        <Header onThemeToggle={toggleTheme} />
        
        <main className="main-content">
          <PageTransition>
            <Routes>
              <Route path="/" element={
                <>
                  <div className="hero-section">
                    <h1 className="hero-title">Löydä seuraava matkakohteesi</h1>
                    <p className="hero-subtitle">Tutustu maailmaan helposti ja nopeasti</p>
                    <SearchBar 
                      onSearch={setSearchResults}
                      onLoading={setIsLoading}
                      onError={setError}
                    />
                  </div>

                  {isLoading && (
                    <div className="loading-spinner" role="status" aria-label="Ladataan">
                      <div className="spinner"></div>
                      <p>Ladataan matkavinkkejä...</p>
                    </div>
                  )}

                  {error && (
                    <div className="error-message" role="alert">
                      <p>{error}</p>
                    </div>
                  )}

                  {searchResults.length > 0 && (
                    <div className="search-results">
                      <h2>Hakutulokset</h2>
                      <div className="results-grid">
                        {searchResults.map(result => (
                          <div key={result.id} className="result-card">
                            <img src={result.image} alt={result.name} />
                            <div className="result-content">
                              <h3>{result.name}</h3>
                              <p>{result.description}</p>
                              <button className="read-more">Lue lisää</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <ImageGallery />
                </>
              } />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/map" element={<MapPage />} />
            </Routes>
          </PageTransition>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;