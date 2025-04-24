//Needs further development

import React from 'react';
import '../styles/PlaceModal.css';

const PlaceModal = ({ place, onClose }) => {
  if (!place) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-header">
          <h2>{place.name}</h2>
          <div className="rating">
            <span>⭐ {place.rating}</span>
          </div>
        </div>
        <div className="modal-body">
          <img src={place.image} alt={place.name} className="modal-image" />
          <div className="modal-details">
            <p className="address">{place.description}</p>
            {place.opening_hours && (
              <div className="opening-hours">
                <h3>Aukioloajat</h3>
                <p>{place.opening_hours}</p>
              </div>
            )}
            {place.website && (
              <div className="website">
                <h3>Verkkosivusto</h3>
                <a href={place.website} target="_blank" rel="noopener noreferrer">
                  {place.website}
                </a>
              </div>
            )}
            {place.phone && (
              <div className="phone">
                <h3>Puhelin</h3>
                <p>{place.phone}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceModal; 