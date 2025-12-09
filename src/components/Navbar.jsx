import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="navbar">
      <div className="logo">Mistura Ishola</div>

      {/* Links */}
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li><a href="#profile" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>

      {/* Hamburger */}
      <div className={`hamburger ${open ? 'toggle' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
