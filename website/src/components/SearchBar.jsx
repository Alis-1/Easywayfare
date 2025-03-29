import React, { useState } from "react";
import TravelInfo from './TravelInfo';
import '../styles/SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setLocation(query);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          placeholder="Hae matkakohteita (esim. Kreikka, Pariisi)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Hae</button>
      </form>
      {location && <TravelInfo location={location} />}
    </div>
  );
};

export default SearchBar;
