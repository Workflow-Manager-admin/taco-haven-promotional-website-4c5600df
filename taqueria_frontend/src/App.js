import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

// The App component serves as root for modular sections - future main sections will be imported from ./components and ./pages

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      {/* Theme toggle remains in the header region for accessibility and convenience */}
      <header className="App-header" style={{padding: 0, minHeight: 0, background: 'none', boxShadow: 'none'}}>
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <Header />
      </header>
      {/* Hero section for homepage visual impact */}
      <Hero />
      {/* Main page content/sections will go here */}
      <main>
        {/* Add your homepage, menu, specials, gallery, and contact sections here */}
        <section>
          <p style={{margin: '2rem 0'}}>Current theme: <strong>{theme}</strong></p>
        </section>
      </main>
    </div>
  );
}

export default App;
