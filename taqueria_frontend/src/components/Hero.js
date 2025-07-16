import React from 'react';
import './Hero.css';

/**
 * Hero section for the Taqueria homepage
 * Displays the restaurant name, tagline, and an appetizing hero image or illustration.
 */

// PUBLIC_INTERFACE
function Hero() {
  return (
    <section className="hero-section" id="home" tabIndex={-1}>
      <div className="hero-content">
        <h1 className="hero-title">
          Taco Haven Taqueria
        </h1>
        <p className="hero-tagline">
          Savor Authentic Flavors. Fresh. Bold. Unforgettable.
        </p>
        <a href="#menu" className="hero-cta-btn">
          View Our Menu
        </a>
      </div>
      <div className="hero-image-container">
        {/* Placeholder hero image - replace with real photo/illustration as needed */}
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
          alt="Delicious tacos assortment"
          className="hero-image"
          loading="eager"
        />
        <div className="hero-image-overlay"></div>
      </div>
    </section>
  );
}

export default Hero;
