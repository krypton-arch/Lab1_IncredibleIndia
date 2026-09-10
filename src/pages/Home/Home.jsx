import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const featuredDestinations = [
    {
      id: 'taj-mahal',
      title: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      region: 'North India',
      tag: 'UNESCO Heritage',
      description: 'An ivory-white marble mausoleum built by Emperor Shah Jahan, symbolizing eternal love and representing the pinnacle of Mughal architecture.',
      imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'varanasi',
      title: 'Sacred Ghats of Varanasi',
      location: 'Varanasi, Uttar Pradesh',
      region: 'North-Central India',
      tag: 'Spiritual Center',
      description: 'One of the world’s oldest living cities on the sacred banks of the Ganges, illuminated by evening Ganga Aarti and centuries of unbroken faith.',
      imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'kerala-backwaters',
      title: 'Kerala Backwaters',
      location: 'Alappuzha, Kerala',
      region: 'South India',
      tag: "God's Own Country",
      description: 'A labyrinth of emerald canals, lagoons, and palm-fringed waters navigated on traditional wooden houseboats, offering pure serenity.',
      imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'jaipur-palaces',
      title: 'Amber Fort & Jaipur',
      location: 'Jaipur, Rajasthan',
      region: 'West India',
      tag: 'Royal Heritage',
      description: 'The storied Pink City, famed for majestic hilltop ramparts, courtyards of mirrors, and the opulent architectural legacy of the Rajputs.',
      imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    }
  ];

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

      {/* Incredible India Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-header">
            <span className="badge badge-saffron">About the Subcontinent</span>
            <h2 className="section-title">A Mosaic of Living Civilizations</h2>
            <p className="section-subtitle">
              India is not merely a country, but an extraordinary emotional and sensory voyage. 
              Unity in diversity is not a slogan here — it is a living reality experienced every single day.
            </p>
          </div>

          <div className="intro-grid">
            <div className="intro-card">
              <div className="intro-icon">🏔️</div>
              <h3>Geographical Grandeur</h3>
              <p>
                From the glacial heights of the Great Himalayas to the Golden Thar Desert, the fertile Indo-Gangetic plains, and the lush tropical Ghats.
              </p>
            </div>
            <div className="intro-card">
              <div className="intro-icon">🕉️</div>
              <h3>Timeless Heritage</h3>
              <p>
                The birthplace of major world philosophies, ancient yoga, holistic ayurveda, and profound architectural epics sculpted across centuries.
              </p>
            </div>
            <div className="intro-card">
              <div className="intro-icon">🪔</div>
              <h3>Celebrations of Life</h3>
              <p>
                Hundreds of vivid festivals celebrated with music, dance, color, and heartfelt hospitality that welcomes every traveler as family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="badge badge-green">Curated Highlights</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Featured Destinations</h2>
              <p className="section-subtitle" style={{ textAlign: 'left', margin: '0' }}>
                A glimpse into India’s most celebrated landmarks and natural spectacles.
              </p>
            </div>
            <Link to="/destinations" className="btn btn-primary view-all-btn">
              <span>View All Destinations</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>

          <div className="destinations-grid">
            {featuredDestinations.map((dest) => (
              <div key={dest.id} className="destination-card">
                <div className="card-image-wrapper">
                  <img src={dest.imageUrl} alt={dest.title} className="card-image" loading="lazy" />
                  <span className="card-tag">{dest.tag}</span>
                  <span className="card-region">{dest.region}</span>
                </div>
                <div className="card-body">
                  <div className="card-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>{dest.location}</span>
                  </div>
                  <h3 className="card-title">{dest.title}</h3>
                  <p className="card-description">{dest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}