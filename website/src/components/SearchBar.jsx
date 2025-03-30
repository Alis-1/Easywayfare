import React, { useState } from "react";
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch, onLoading, onError, isApiLoaded }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim() || !isApiLoaded) {
      onError('Odota hetki, API alustetaan...');
      return;
    }

    onLoading(true);
    onError(null);

    try {
      const service = new window.google.maps.places.PlacesService(document.createElement('div'));
      
      // Hae nähtävyydet suoraan tekstihaulla
      const places = await new Promise((resolve, reject) => {
        const request = {
          query: `${searchTerm} tourist attractions`,
          fields: ['name', 'formatted_address', 'photos', 'rating']
        };

        service.textSearch(request, (results, status) => {
          if (status === 'OK' && results.length > 0) {
            resolve(results);
          } else {
            reject(new Error('Nähtävyyksiä ei löydy. Kokeile kirjoittaa hakusana tarkemmin.'));
          }
        });
      });

      // Muunna tulokset oikeaan muotoon
      const searchResults = places.slice(0, 6).map((place, index) => ({
        id: index + 1,
        name: place.name,
        description: place.formatted_address,
        rating: place.rating || 'Ei arvostelua',
        image: place.photos ? place.photos[0].getUrl() : 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
      }));

      onSearch(searchResults);
    } catch (error) {
      console.error('Hakuvirhe:', error);
      onError(error.message);
    } finally {
      onLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Hae matkakohteita (esim. Pariisi, Rooma)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Hae</button>
      </form>
    </div>
  );
};

export default SearchBar;
