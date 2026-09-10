import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar container">
        <div className="navbar-brand">
          <Link to="/" onClick={closeMenu} className="brand-logo">
            <span className="brand-chakra">☸</span>
            <span className="brand-text">Incredible India</span>
          </Link>
        </div>

        <button 
          className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <NavLink 
            to="/" 
            end 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Home
          </NavLink>
          <NavLink 
            to="/destinations" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Destinations
          </NavLink>
          <NavLink 
            to="/culture" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Culture
          </NavLink>
          <NavLink 
            to="/food" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Food
          </NavLink>
        </div>
      </nav>
    </header>
  );
}