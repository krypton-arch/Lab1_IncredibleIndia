import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-chakra">☸</span>
            <h3>Incredible India</h3>
          </div>
          <p className="footer-tagline">
            Celebrating the breathtaking diversity, heritage, and soul of India.
          </p>
          <div className="team-credit">
            <span>A Collaborative DevOps Lab Project</span>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/culture">Culture & Heritage</Link></li>
            <li><Link to="/food">Food & Cuisine</Link></li>
          </ul>
        </div>

        <div className="footer-team-group">
          <h4>Project Contributors</h4>
          <ul>
            <li><strong>Sounak:</strong> Home / Setup</li>
            <li><strong>Abhishek:</strong> Destinations</li>
            <li><strong>Arpan:</strong> Culture</li>
            <li><strong>Joshua:</strong> Cuisine</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>&copy; {new Date().getFullYear()} Incredible India Collaboration. Built with React & Vite.</p>
        </div>
      </div>
    </footer>
  );
}
