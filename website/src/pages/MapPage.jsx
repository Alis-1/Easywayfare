import React from 'react';
import '../styles/MapPage.css';
import SearchBarGoogle from '../components/SearchBarGoogle';

const MapPage = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const turkuLat = 60.4518;
  const turkuLng = 22.2666;

    return (
    <div className="search-bar-container">
      <SearchBarGoogle></SearchBarGoogle>
    </div>
  );
};

export default MapPage;