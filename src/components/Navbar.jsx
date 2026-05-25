import React, { useState } from 'react';
import './Navbar.css';

const navItems = [
  { id: 'profile', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNavigate = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <button
          type="button"
          className="logo"
          onClick={() => handleNavigate('profile')}
          aria-label="Mistura home"
        >
          <span className="logo-mark">M</span>
          <span className="logo-text">
            <span className="logo-bracket">&lt;</span>
            Mistura
            <span className="logo-bracket">/&gt;</span>
          </span>
        </button>

        <button
          type="button"
          className={`hamburger ${open ? 'toggle' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button type="button" onClick={() => handleNavigate(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="hire-btn"
              onClick={() => handleNavigate('contact')}
            >
              Hire Me
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
