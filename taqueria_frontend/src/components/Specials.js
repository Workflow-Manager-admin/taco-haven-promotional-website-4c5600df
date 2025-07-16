import React from 'react';
import './Specials.css';
import Card from './Card';

/**
 * Specials section for current promotions or special offers.
 * Displays a grid of enticing promotional cards.
 */

// PUBLIC_INTERFACE
function Specials() {
  // Example specials/promotions data
  const specials = [
    {
      id: 1,
      title: 'Taco Tuesday',
      description: 'Buy 2 tacos, get 1 FREE every Tuesday!',
      image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0723c3e?auto=format&fit=crop&w=400&q=80',
      label: 'Tuesday Only',
    },
    {
      id: 2,
      title: 'Family Fiesta Pack',
      description: '12 tacos + chips & salsa for just $29.99. Perfect for sharing!',
      image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=400&q=80',
      label: 'Family Deal',
    },
    {
      id: 3,
      title: 'Happy Hour',
      description: 'Half-price drinks and $2 tacos • 4-6pm weekdays!',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
      label: 'Weekdays 4-6pm',
    },
    {
      id: 4,
      title: 'New! Shrimp Tacos',
      description: 'Try our limited-time zesty shrimp tacos—crisp, fresh, bold!',
      image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
      label: 'Limited Time',
    },
  ];

  return (
    <section className="specials-section card" id="specials" tabIndex={-1}>
      <h2 className="specials-title">Current Specials</h2>
      <p className="specials-description">
        Enjoy our latest promotions – only for a limited time!
      </p>
      <div className="specials-grid">
        {specials.map((special) => (
          <Card className="specials-card" key={special.id}>
            <div className="specials-img-box">
              <img
                src={special.image}
                alt={special.title}
                className="specials-img"
                loading="lazy"
              />
              {special.label && (
                <span className="specials-badge">{special.label}</span>
              )}
            </div>
            <div className="specials-info">
              <h3 className="specials-item-title">{special.title}</h3>
              <p className="specials-item-description">{special.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Specials;
