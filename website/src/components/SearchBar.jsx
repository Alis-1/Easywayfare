import React, { useState } from "react";
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-bar-container"> {/* Lisää контейнер */}
      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          placeholder="Hae kaupunkia tai tekemistä..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
