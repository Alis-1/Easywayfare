import React, { useState, useEffect } from 'react';
import api_key from "../../apiFolder/api";

const TravelInfo = ({ location }) => {
  const [travelTips, setTravelTips] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTravelInfo = async () => {
      if (!location) return;

      setLoading(true);
      try {
        // Hae matkavinkit
        const tipsResponse = await fetch(`https://api.unsplash.com/search/photos?query=${location}+travel+tips&per_page=5`, {
          headers: {
            'Authorization': `Client-ID ${api_key}`
          }
        });
        const tipsData = await tipsResponse.json();
        setTravelTips(tipsData.results);

        // Hae kuvat
        const imagesResponse = await fetch(`https://api.unsplash.com/search/photos?query=${location}&per_page=10`, {
          headers: {
            'Authorization': `Client-ID ${api_key}`
          }
        });
        const imagesData = await imagesResponse.json();
        setImages(imagesData.results);
      } catch (error) {
        console.error('Virhe matkavinkkien haussa:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTravelInfo();
  }, [location]);

  if (loading) {
    return <div className="loading">Ladataan matkavinkkejä...</div>;
  }

  return (
    <div className="travel-info">
      <div className="info-section">
        <h2>Matkavinkit {location}</h2>
        <div className="tips-grid">
          {travelTips.map((tip, index) => (
            <div key={index} className="info-card">
              <img src={tip.urls.regular} alt={tip.alt_description} />
              <div className="info-card-content">
                <h3>{tip.description || `Vinkki ${index + 1}`}</h3>
                <p>{tip.alt_description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="info-section">
        <h2>Kuvia {location}</h2>
        <div className="images-grid">
          {images.map((image, index) => (
            <div key={index} className="info-card">
              <img src={image.urls.regular} alt={image.alt_description} />
              <div className="info-card-content">
                <p>{image.alt_description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelInfo; 