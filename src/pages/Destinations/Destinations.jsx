import React, { useState } from 'react';
import './Destinations.css';

export default function Destinations() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const regions = [
    { id: 'all', label: 'All Regions' },
    { id: 'north', label: 'North India' },
    { id: 'south', label: 'South India' },
    { id: 'east', label: 'East India' },
    { id: 'west', label: 'West India' },
  ];

  return (
    <div className="destinations-page">
      {/* Hero Header / Introduction */}
      <section className="destinations-hero">
        <div className="container">
          <span className="badge badge-saffron">Explore The Subcontinent</span>
          <h1 className="destinations-title">Destinations of India</h1>
          <p className="destinations-intro">
            From the snow-capped peaks of the Himalayas to the tranquil backwaters of Kerala,
            and from the golden dunes of the Thar Desert to the lush tea plantations of the East —
            discover the magnificent diversity across every corner of India.
          </p>

          <div className="destinations-stats">
            <div className="stat-item">
              <span className="stat-number">28</span>
              <span className="stat-label">States</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8</span>
              <span className="stat-label">Union Territories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">42+</span>
              <span className="stat-label">UNESCO World Heritage Sites</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Geographic Zones</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="destinations-filter-section container">
        <div className="filter-wrapper">
          <div className="region-tabs">
            {regions.map(region => (
              <button
                key={region.id}
                className={`tab-btn ${selectedRegion === region.id ? 'active' : ''}`}
                onClick={() => setSelectedRegion(region.id)}
              >
                {region.label}
              </button>
            ))}
          </div>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search by city, monument, or state..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </section>

      <section className="destinations-content container">
        <div className="content-intro">
          <h2>Browse Iconic Landmarks</h2>
          <p>Select a region above to filter destinations across North, South, East, and West India.</p>
        </div>
      </section>
    </div>
  );
}
