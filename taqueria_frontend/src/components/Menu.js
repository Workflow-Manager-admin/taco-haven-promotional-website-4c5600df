import React from 'react';
import './Menu.css';
import Card from './Card';
import Tag from './Tag';

/**
 * Menu section for the Taqueria homepage.
 * Displays a responsive grid of menu items (image, title, price, highlight tags).
 * Sample menu data and placeholder images are used.
 */

// PUBLIC_INTERFACE
function Menu() {
  // Sample menu data
  const menuItems = [
    {
      id: 1,
      name: 'Carne Asada Taco',
      price: 3.99,
      img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
      tags: ['Best Seller'],
    },
    {
      id: 2,
      name: 'Al Pastor Taco',
      price: 3.49,
      img: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80',
      tags: ['Spicy', 'Customer Favorite'],
    },
    {
      id: 3,
      name: 'Veggie Taco',
      price: 3.19,
      img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
      tags: ['Vegetarian', 'Fresh'],
    },
    {
      id: 4,
      name: 'Baja Fish Taco',
      price: 4.25,
      img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=80',
      tags: ['Seasonal', 'Crispy'],
    },
    {
      id: 5,
      name: 'Barbacoa Taco',
      price: 4.09,
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
      tags: [],
    },
    {
      id: 6,
      name: 'Breakfast Taco',
      price: 3.59,
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
      tags: ['Morning Special'],
    },
  ];

  return (
    <section className="menu-section card" id="menu" tabIndex={-1}>
      <h2 className="menu-title">Our Menu</h2>
      <p className="menu-description">
        Explore our signature tacos, made fresh with bold flavors!
      </p>
      <div className="menu-grid">
        {menuItems.map(item => (
          <Card className="menu-card" key={item.id}>
            <div className="menu-img-box">
              <img
                src={item.img}
                alt={item.name}
                className="menu-img"
                loading="lazy"
              />
            </div>
            <div className="menu-info">
              <div className="menu-header">
                <h3 className="menu-item-title">{item.name}</h3>
                <span className="menu-item-price">${item.price.toFixed(2)}</span>
              </div>
              {item.tags && item.tags.length > 0 && (
                <div className="menu-tags">
                  {item.tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Menu;
