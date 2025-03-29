import React from 'react';

const ImageGallery = () => {
  const destinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      description: 'Tropiikin paratiisi'
    },
    {
      id: 2,
      name: 'Santorini, Kreikka',
      image: 'https://images.unsplash.com/photo-1613395877347-5d878812f4b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      description: 'Valkoinen ja sininen paratiisi'
    },
    {
      id: 3,
      name: 'Kyoto, Japani',
      image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      description: 'Perinteinen ja moderni'
    },
    {
      id: 4,
      name: 'Maldives',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      description: 'Korallisaaret'
    },
    {
      id: 5,
      name: 'Pariisi, Ranska',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      description: 'Rakkauden kaupunki'
    },
    {
      id: 6,
      name: 'New York, USA',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d801e126f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      description: 'Ikuinen kaupunki'
    }
  ];

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Suosittuja matkakohteita</h2>
      <div className="gallery-grid">
        {destinations.map(destination => (
          <div key={destination.id} className="gallery-card">
            <div className="gallery-image-container">
              <img 
                src={destination.image} 
                alt={destination.name}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery; 