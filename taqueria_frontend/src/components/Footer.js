import React from 'react';
import './Footer.css';

/**
 * Footer component displays about info, social/media links, and secondary navigation.
 * Designed for modern, vibrant taqueria website with responsive layout.
 */
// PUBLIC_INTERFACE
function Footer() {
  return (
    <footer className="taq-footer" id="footer" aria-label="Site footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <span className="footer-logo" aria-label="Taco icon" role="img">🌮</span>
          <span className="footer-brand">Taqueria</span>
          <p className="footer-about-description">
            Fresh, bold, and unforgettable tacos in the heart of Taco Town.<br />
            Serving authentic Mexican flavors since 2012 – Family owned, proudly local!
          </p>
        </div>
        {/* Social Media Links */}
        <div className="footer-social">
          <h4 className="footer-social-title">Follow Us</h4>
          <div className="footer-social-links">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-link">
              <svg width="23" height="23" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.16c3.2.01 3.584.012 4.847.07 1.17.054 1.963.24 2.418.403a4.4 4.4 0 0 1 1.59.926c.454.454.779 1 .934 1.6.159.466.346 1.25.402 2.428.058 1.263.059 1.651.07 4.851-.01 3.2-.012 3.583-.07 4.847-.056 1.171-.243 1.964-.402 2.419a4.397 4.397 0 0 1-.936 1.59c-.453.453-1 .778-1.6.934-.463.158-1.247.345-2.418.401-1.263.058-1.652.07-4.851.07s-3.583-.012-4.847-.07c-1.171-.056-1.964-.243-2.419-.401a4.403 4.403 0 0 1-1.59-.934 4.406 4.406 0 0 1-.934-1.59c-.158-.455-.345-1.249-.401-2.419C2.171 15.642 2.16 15.253 2.16 12c0-3.2.012-3.584.07-4.847.056-1.171.243-1.964.401-2.419A4.41 4.41 0 0 1 3.565 3.144a4.417 4.417 0 0 1 1.59-.934c.455-.158 1.248-.345 2.419-.401C8.418 2.171 8.806 2.16 12 2.16zM12 0C8.741 0 8.332.012 7.052.07 5.77.127 4.805.322 4.025.573 3.22.833 2.543 1.143 1.85 1.85.797 2.905.497 4.075.07 7.052.012 8.332 0 8.741 0 12c0 3.259.012 3.668.07 4.948.127 2.977.322 4.147.573 4.928.26.805.57 1.482 1.279 2.175.653.653 1.37.986 2.175 1.279.789.254 1.95.446 4.928.573C8.332 23.988 8.741 24 12 24c3.259 0 3.668-.012 4.948-.07 2.977-.127 4.147-.32 4.928-.573.805-.26 1.482-.57 2.175-1.279.653-.653.986-1.37 1.279-2.175.254-.789.446-1.95.573-4.928C23.988 15.668 24 15.259 24 12c0-3.259-.012-3.668-.07-4.948-.127-2.977-.32-4.147-.573-4.928C22.996 2.343 22.685 1.667 21.975.974c-.653-.653-1.37-.986-2.175-1.279C19.01.464 17.848.273 14.872.146 13.591.088 13.182.076 12 .067L12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 12 8a3.999 3.999 0 0 1 0 7.999zm7.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-link">
              <svg width="23" height="23" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.676 0H1.326C.595 0 0 .6 0 1.337v21.326C0 23.399.595 24 1.326 24h11.482v-9.281h-3.125V11.02h3.125V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.919.001c-1.504 0-1.796.716-1.796 1.765v2.313h3.587l-.467 3.699h-3.12V24h6.116A1.326 1.326 0 0 0 24 22.663V1.337A1.326 1.326 0 0 0 22.676 0"/>
              </svg>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="footer-social-link">
              <svg width="23" height="23" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 4.556a9.834 9.834 0 0 1-2.828.775 4.932 4.932 0 0 0 2.163-2.724c-.951.555-2.005.96-3.127 1.184a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.665 2.475c0 1.708.87 3.216 2.194 4.099a4.904 4.904 0 0 1-2.228-.616c-.054 1.985 1.386 3.868 3.444 4.29-.338.092-.693.141-1.061.141-.258 0-.507-.025-.748-.072a4.935 4.935 0 0 0 4.604 3.419 9.868 9.868 0 0 1-6.102 2.104c-.396 0-.788-.023-1.175-.069A13.945 13.945 0 0 0 7.548 21c9.058 0 14.01-7.513 14.01-14.023 0-.213-.005-.425-.015-.636A10.025 10.025 0 0 0 24 4.557z"/>
              </svg>
            </a>
          </div>
        </div>
        {/* Secondary Navigation */}
        <nav className="footer-nav" aria-label="Footer navigation">
          <h4 className="footer-nav-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#specials">Specials</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#location">Location</a></li>
          </ul>
        </nav>
      </div>
      {/* Copyright */}
      <div className="footer-copy">
        <small>
          &copy; {new Date().getFullYear()} Taco Haven Taqueria &bull; All rights reserved &bull; Crafted with <span aria-label="love">🌮</span>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
