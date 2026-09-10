import React, { useState } from 'react';
import './Destinations.css';

const destinationsData = [
  // NORTH INDIA
  {
    id: 'north-1',
    name: 'Taj Mahal & Agra Fort',
    state: 'Uttar Pradesh',
    region: 'north',
    regionLabel: 'North India',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    description: 'An ivory-white marble mausoleum on the south bank of the Yamuna river, recognized worldwide as a pinnacle of Mughal architecture and an eternal symbol of love.',
    highlights: ['UNESCO World Heritage Site', 'Yamuna River View', 'Mughal Architecture'],
    bestTime: 'October to March'
  },
  {
    id: 'north-2',
    name: 'Pangong Lake & Leh-Ladakh',
    state: 'Ladakh',
    region: 'north',
    regionLabel: 'North India',
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
    description: 'High-altitude cold desert surrounded by rugged Himalayan peaks, azure alpine lakes, and centuries-old Buddhist monasteries nestled atop dramatic cliffs.',
    highlights: ['High Altitude Pass (Khardung La)', 'Ancient Monasteries', 'Color-shifting Lakes'],
    bestTime: 'May to September'
  },
  {
    id: 'north-3',
    name: 'Varanasi Ghats & Ganga Aarti',
    state: 'Uttar Pradesh',
    region: 'north',
    regionLabel: 'North India',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
    description: 'One of the oldest continuously inhabited cities in human history, known for its sacred riverfront steps, spiritual resonance, and mesmerizing evening ceremonies.',
    highlights: ['Dashashwamedh Ghat', 'Evening Ganga Aarti', 'Historic Silk Weaving'],
    bestTime: 'November to February'
  },
  {
    id: 'north-4',
    name: 'Gulmarg & Kashmir Valley',
    state: 'Jammu & Kashmir',
    region: 'north',
    regionLabel: 'North India',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
    description: 'Revered as "Paradise on Earth", offering snow-clad pine slopes, the world\'s second highest operating cable car, and pristine alpine meadows.',
    highlights: ['Gulmarg Gondola', 'Snow Skiing Slopes', 'Pristine Pine Forests'],
    bestTime: 'December to April'
  },

  // SOUTH INDIA
  {
    id: 'south-1',
    name: 'Alleppey Backwaters & Houseboats',
    state: 'Kerala',
    region: 'south',
    regionLabel: 'South India',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    description: 'A labyrinth of tranquil canals, lagoons, and palm-fringed waterways explored aboard traditional thatched kettuvallams (houseboats) in "God\'s Own Country".',
    highlights: ['Houseboat Cruises', 'Ayurvedic Wellness', 'Vembanad Lake Serenity'],
    bestTime: 'September to March'
  },
  {
    id: 'south-2',
    name: 'Hampi Ruins & Vijayanagara Empire',
    state: 'Karnataka',
    region: 'south',
    regionLabel: 'South India',
    image: 'https://images.unsplash.com/photo-1600100397608-f010f443b794?auto=format&fit=crop&w=800&q=80',
    description: 'A surreal landscape of monolithic boulder hills and magnificent ruins of the 14th-century Vijayanagara Empire, featuring the iconic Stone Chariot.',
    highlights: ['UNESCO World Heritage', 'Vittala Temple Complex', 'Boulder Landscapes'],
    bestTime: 'October to February'
  },
  {
    id: 'south-3',
    name: 'Meenakshi Amman Temple, Madurai',
    state: 'Tamil Nadu',
    region: 'south',
    regionLabel: 'South India',
    image: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=800&q=80',
    description: 'An architectural marvel of Dravidian craft adorned with 14 towering gopurams decorated with thousands of vividly painted mythological stone sculptures.',
    highlights: ['Dravidian Gopurams', 'Hall of 1000 Pillars', 'Living Spiritual Tradition'],
    bestTime: 'October to March'
  },
  {
    id: 'south-4',
    name: 'Coorg (Kodagu) Misty Hills',
    state: 'Karnataka',
    region: 'south',
    regionLabel: 'South India',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
    description: 'Nicknamed the "Scotland of India", featuring rolling emerald hills blanketed in fragrant coffee and cardamom plantations, waterfalls, and Kodava culture.',
    highlights: ['Coffee Plantations', 'Abbey Falls', 'Western Ghats Biodiversity'],
    bestTime: 'October to April'
  },

  // EAST INDIA
  {
    id: 'east-1',
    name: 'Darjeeling Himalayan Hill Range',
    state: 'West Bengal',
    region: 'east',
    regionLabel: 'East India',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    description: 'Perched in the Eastern Himalayas, famous for sweeping views of Mt. Kanchenjunga, world-renowned organic tea estates, and the UNESCO Toy Train.',
    highlights: ['Kanchenjunga Sunrise', 'Himalayan Toy Train', 'Emerald Tea Estates'],
    bestTime: 'March to May, Oct to Dec'
  },
  {
    id: 'east-2',
    name: 'Konark Sun Temple',
    state: 'Odisha',
    region: 'east',
    regionLabel: 'East India',
    image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=800&q=80',
    description: 'A 13th-century monumental temple designed in the form of a colossal chariot dedicated to Surya the Sun God, with intricate stone carved wheels that function as sundials.',
    highlights: ['UNESCO World Heritage', 'Intricate Sun Chariot Wheels', 'Kalinga Architecture'],
    bestTime: 'November to February'
  },
  {
    id: 'east-3',
    name: 'Kaziranga National Park',
    state: 'Assam',
    region: 'east',
    regionLabel: 'East India',
    image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80',
    description: 'Sprawling alluvial grasslands and wetlands hosting two-thirds of the world\'s great one-horned rhinoceros population alongside wild tigers, elephants, and rare birdlife.',
    highlights: ['One-Horned Rhinoceros', 'Brahmaputra Floodplains', 'Wildlife Jeep Safari'],
    bestTime: 'November to April'
  },
  {
    id: 'east-4',
    name: 'Tawang & Eastern Monasteries',
    state: 'Arunachal Pradesh',
    region: 'east',
    regionLabel: 'East India',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    description: 'Sitting at 10,000 feet, home to the largest Buddhist monastery in India, snow-fed glacial lakes, and the dramatic high mountain pass of Sela Pass.',
    highlights: ['17th-Century Monastery', 'Sela Pass at 13,700 ft', 'Monpa Tribal Culture'],
    bestTime: 'March to June, Sep to Oct'
  },

  // WEST INDIA
  {
    id: 'west-1',
    name: 'Jaipur & Amber Fort',
    state: 'Rajasthan',
    region: 'west',
    regionLabel: 'West India',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    description: 'The Royal Pink City, featuring grand hilltop fortresses, the honeycomb facade of Hawa Mahal, and the heritage palaces of Rajput royalty.',
    highlights: ['Amber Fort & Sheesh Mahal', 'Hawa Mahal Palace', 'Rajasthani Royal Cuisine'],
    bestTime: 'October to March'
  },
  {
    id: 'west-2',
    name: 'Goa Coastal Heritage & Beaches',
    state: 'Goa',
    region: 'west',
    regionLabel: 'West India',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    description: 'Golden sandy shores, Portuguese-era colonial churches, spice plantations, and vibrant beach culture blending Indian and Iberian traditions.',
    highlights: ['Basilica of Bom Jesus', 'Palolem & Anjuna Beaches', 'Sunset Catamaran Cruises'],
    bestTime: 'November to February'
  },
  {
    id: 'west-3',
    name: 'Ajanta & Ellora Rock-Cut Caves',
    state: 'Maharashtra',
    region: 'west',
    regionLabel: 'West India',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80',
    description: 'Ancient monolithic rock-cut cave temples dating from 2nd century BCE, featuring the world\'s largest monolithic rock excavation: the Kailash Temple.',
    highlights: ['UNESCO World Heritage', 'Kailash Temple Monolith', 'Ancient Fresco Paintings'],
    bestTime: 'October to March'
  },
  {
    id: 'west-4',
    name: 'Great Rann of Kutch',
    state: 'Gujarat',
    region: 'west',
    regionLabel: 'West India',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
    description: 'One of the largest salt deserts in the world, glowing pure white under the moonlight, celebrated annually during the vibrant Rann Utsav festival.',
    highlights: ['Endless White Salt Desert', 'Rann Utsav Festival', 'Kutchi Handicrafts & Embroidery'],
    bestTime: 'November to February'
  }
];

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

  const filteredDestinations = destinationsData.filter(dest => {
    const matchesRegion = selectedRegion === 'all' || dest.region === selectedRegion;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery = !query || 
      dest.name.toLowerCase().includes(query) ||
      dest.state.toLowerCase().includes(query) ||
      dest.description.toLowerCase().includes(query) ||
      dest.highlights.some(h => h.toLowerCase().includes(query));
    return matchesRegion && matchesQuery;
  });

  // Group by region for regional sections
  const northDestinations = filteredDestinations.filter(d => d.region === 'north');
  const southDestinations = filteredDestinations.filter(d => d.region === 'south');
  const eastDestinations = filteredDestinations.filter(d => d.region === 'east');
  const westDestinations = filteredDestinations.filter(d => d.region === 'west');

  const renderCardGrid = (items) => (
    <div className="destinations-grid">
      {items.map(item => (
        <div key={item.id} className="destination-card">
          <div className="card-image-wrapper">
            <img 
              src={item.image} 
              alt={item.name} 
              className="card-image"
              loading="lazy"
              onError={(e) => {
                // Fallback graceful gradient if image fails
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('image-fallback');
              }}
            />
            <span className={`region-tag tag-${item.region}`}>
              {item.regionLabel}
            </span>
          </div>

          <div className="card-body">
            <div className="card-location">
              <span className="location-pin">📍</span>
              <span className="state-name">{item.state}</span>
            </div>
            <h3 className="card-title">{item.name}</h3>
            <p className="card-desc">{item.description}</p>

            <div className="card-highlights">
              <strong>Highlights:</strong>
              <ul>
                {item.highlights.map((highlight, idx) => (
                  <li key={idx}>✓ {highlight}</li>
                ))}
              </ul>
            </div>

            <div className="card-footer">
              <span className="best-time">
                <span className="time-icon">🗓️</span> Best: {item.bestTime}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

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
              placeholder="Search by landmark, city, or state..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="destinations-content container">
        {filteredDestinations.length === 0 ? (
          <div className="no-results">
            <h3>No destinations found</h3>
            <p>Try searching with another keyword or resetting the region filter.</p>
            <button 
              className="btn btn-primary"
              onClick={() => { setSelectedRegion('all'); setSearchQuery(''); }}
            >
              Reset Filters
            </button>
          </div>
        ) : selectedRegion === 'all' && !searchQuery ? (
          /* Structured Regional View when All is selected */
          <div className="regional-sections">
            {/* North India Section */}
            <section className="region-block" id="north-india">
              <div className="region-header">
                <span className="badge badge-saffron">Northern Crown</span>
                <h2>North India — Majestic Peaks & Royal Heritage</h2>
                <p>The eternal Himalayas, sacred rivers, Mughal architectural wonders, and centuries-old spiritual tradition.</p>
              </div>
              {renderCardGrid(northDestinations)}
            </section>

            {/* South India Section */}
            <section className="region-block" id="south-india">
              <div className="region-header">
                <span className="badge badge-green">Southern Coast & Temples</span>
                <h2>South India — Backwaters, Ancient Dynasties & Spices</h2>
                <p>Serene tropical waterways, thousand-year-old Dravidian temple architecture, and aromatic coffee-clad hills.</p>
              </div>
              {renderCardGrid(southDestinations)}
            </section>

            {/* East India Section */}
            <section className="region-block" id="east-india">
              <div className="region-header">
                <span className="badge badge-saffron">Eastern Horizons</span>
                <h2>East India — Tea Valleys, Wildlife & Sun Temples</h2>
                <p>Misty Himalayan tea estates, primeval floodplains teeming with rare wildlife, and exquisite sun sanctuaries.</p>
              </div>
              {renderCardGrid(eastDestinations)}
            </section>

            {/* West India Section */}
            <section className="region-block" id="west-india">
              <div className="region-header">
                <span className="badge badge-green">Western Horizons</span>
                <h2>West India — Palaces, Golden Shores & Rock-Cut Wonders</h2>
                <p>Sun-drenched desert forts, sun-kissed Arabian Sea beaches, and monumental rock-hewn caves.</p>
              </div>
              {renderCardGrid(westDestinations)}
            </section>
          </div>
        ) : (
          /* Filtered Grid View */
          <div className="filtered-view">
            <div className="results-header">
              <h2>Showing {filteredDestinations.length} Destination{filteredDestinations.length > 1 ? 's' : ''}</h2>
              {selectedRegion !== 'all' && (
                <span className="badge badge-saffron">
                  Region: {regions.find(r => r.id === selectedRegion)?.label}
                </span>
              )}
            </div>
            {renderCardGrid(filteredDestinations)}
          </div>
        )}
      </section>
    </div>
  );
}
