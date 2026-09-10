import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>अतिथि देवो भव • Atithi Devo Bhava</span>
          </div>
          <h1 className="hero-title">
            Discover the Timeless Wonder of <span className="highlight-text">Incredible India</span>
          </h1>
          <p className="hero-subtitle">
            From the snow-crowned summits of the Himalayas to the tranquil coastal backwaters of Kerala, 
            immerse yourself in a land of ancient wisdom, vibrant festivals, monumental history, and unforgettable flavors.
          </p>
          <div className="hero-actions">
            <Link to="/destinations" className="btn btn-primary">
              <span>Explore Destinations</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link to="/culture" className="btn btn-outline">
              <span>Experience Culture</span>
            </Link>
            <Link to="/food" className="btn btn-outline">
              <span>Taste Cuisines</span>
            </Link>
          </div>

          {/* Quick Stats Highlights */}
          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-number">5,000+</span>
              <span className="stat-label">Years of Civilization</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">42</span>
              <span className="stat-label">UNESCO Heritage Sites</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">28</span>
              <span className="stat-label">Diverse States & 8 UTs</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">1,000+</span>
              <span className="stat-label">Regional Delicacies</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}