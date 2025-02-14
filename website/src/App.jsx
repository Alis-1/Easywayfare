import React, { useState } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SearchBarGoogle from "./components/SearchBarGoogle";
import "./styles/SearchBar.css";
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  
  
  return (
    <Router>
      <div className="app">
        <Header />
        <SearchBarGoogle />
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