import React, { useState } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SearchBar from "./components/SearchBar";
import "./styles/SearchBar.css";
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    console.log("Searching for:", query);
    const filteredResults = []; // Esimerkki: tyhjä lista
    setSearchResults(filteredResults);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <SearchBar onSearch={handleSearch} />
        <ul>
          {searchResults.map(result => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;