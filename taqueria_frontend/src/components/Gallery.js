import React from 'react';
import './Gallery.css';

/**
 * Gallery component showcasing photos of the taqueria, food, and atmosphere.
 * Responsive grid layout, modern style. Replace images as needed.
 */

// PUBLIC_INTERFACE
function Gallery() {
  // Use a sample set of public domain/Unsplash photos.
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=700&q=80',
      alt: 'Tacos on rustic plate',
    },
    {
      src: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=700&q=80',
      alt: 'Salsa bowls and chips',
    },
    {
      src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80',
      alt: 'Closeup taco spread with lime',
    },
    {
      src: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=700&q=80',
      alt: 'Outdoor taqueria seating',
    },
    {
      src: 'https://images.unsplash.com/photo-1523987355523-c7b5b0723c3e?auto=format&fit=crop&w=700&q=80',
      alt: 'Colorful taco assortment',
    },
    {
      src: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=700&q=80',
      alt: 'Taqueria staff preparing food',
    },
  ];

  return (
    <section className="gallery-section card" id="gallery" tabIndex={-1}>
      <h2 className="gallery-title">Gallery</h2>
      <p className="gallery-description">
        Discover the vibrant spirit, delicious dishes, and festive atmosphere of our taqueria!
      </p>
      <div className="gallery-grid">
        {images.map((img, idx) => (
          <div className="gallery-img-container" key={idx}>
            <img
              className="gallery-img"
              src={img.src}
              alt={img.alt}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
