import React, { useState } from 'react';
import './Header.css';

// PUBLIC_INTERFACE
/**
 * Header (Navigation) component for the Taqueria site.
 * Includes logo/text and anchor links to main page sections.
 * Responsive: Collapses into hamburger menu on mobile.
 */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggles the mobile menu
  // PUBLIC_INTERFACE
  const handleMenuToggle = () => {
    setMenuOpen(prevOpen => !prevOpen);
  };

  // Closes menu upon navigation click (for mobile UX)
  // PUBLIC_INTERFACE
  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  // Branding colors and look are defined via :root variables and Header.css
  return (
    <nav className="taq-header">
      <div className="logo-area">
        {/* Consider swapping with an image logo if available */}
        <span className="logo-icon" aria-label="Taco icon" role="img">🌮</span>
        <span className="logo-text">Taqueria</span>
      </div>
      <button
        className={`menu-toggle${menuOpen ? " open" : ""}`}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={handleMenuToggle}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`nav-links${menuOpen ? " show" : ""}`}>
        <li><a href="#home" onClick={handleNavLinkClick}>Home</a></li>
        <li><a href="#menu" onClick={handleNavLinkClick}>Menu</a></li>
        <li><a href="#specials" onClick={handleNavLinkClick}>Specials</a></li>
        <li><a href="#gallery" onClick={handleNavLinkClick}>Gallery</a></li>
        <li><a href="#contact" onClick={handleNavLinkClick}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Header;
