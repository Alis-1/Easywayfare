import React from 'react';
import '../styles/MapPage.css';

const MapPage = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const turkuLat = 60.4518;
  const turkuLng = 22.2666;

    return (
    <div className="map-page">
      <div className="map-container">
        <iframe
          title="Turun AMK kartalla"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Turun+AMK&center=${turkuLat},${turkuLng}&zoom=15`}
        ></iframe>
      </div>
    </div>
  );
};

export default MapPage;