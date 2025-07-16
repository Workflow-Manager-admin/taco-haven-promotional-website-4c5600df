import React from 'react';
import './Map.css';

/**
 * Map component for displaying the taqueria location.
 * Uses Google Maps embed or placeholder.
 */
// PUBLIC_INTERFACE
function Map() {
  // Example: Placeholder location. Replace lat/lng and query for real business location as needed.
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.5692281182227!2d-117.16026322344587!3d32.715738090879135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95491c8956039%3A0x35a469589086afe3!2sTaco%20Shop!5e0!3m2!1sen!2sus!4v1683145785716!5m2!1sen!2sus";

  return (
    <section className="map-section card" id="location" tabIndex={-1}>
      <h2 className="map-title">Find Us</h2>
      <p className="map-description">
        Visit us at our welcoming location – plenty of parking and a festive atmosphere await!
      </p>
      <div className="map-container-outer">
        <iframe
          className="map-iframe"
          title="Taco Haven Location"
          src={mapSrc}
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="map-hours">
        <span className="map-hours-title"><b>Hours:</b></span>
        <span>Mon–Sat: 11am – 9pm</span>
        <span>Sun: 12pm – 7pm</span>
      </div>
      <div className="map-address">
        <span><b>123 Fiesta Ave, Taco Town, USA</b></span>
      </div>
    </section>
  );
}

export default Map;
