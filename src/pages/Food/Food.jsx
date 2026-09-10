import { useMemo, useState } from 'react';
import './Food.css';

const regions = [
  { id: 'all', label: 'All flavours' },
  { id: 'north', label: 'North India' },
  { id: 'south', label: 'South India' },
  { id: 'east', label: 'East India' },
  { id: 'west', label: 'West India' },
];

const regionalCuisines = [
  {
    id: 'north',
    eyebrow: 'North India',
    title: 'Slow-cooked comfort & fragrant tandoors',
    description:
      'From the farms of Punjab to the royal kitchens of Rajasthan and Kashmir, northern cooking celebrates warming spices, breads from the tandoor, dairy-rich gravies, and carefully layered rice dishes.',
    highlights: ['Tandoori breads', 'Rich gravies', 'Aromatic biryanis'],
    image:
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'A bowl of richly spiced Indian curry served with naan bread',
  },
  {
    id: 'south',
    eyebrow: 'South India',
    title: 'Coconut, curry leaves & the comfort of rice',
    description:
      'Rice, lentils, coconut, tamarind, and freshly ground spices create bright, balanced plates across the southern states. Every meal has a distinctive rhythm of crisp, tangy, spicy, and soothing.',
    highlights: ['Coconut-forward curries', 'Fermented staples', 'Filter coffee'],
    image:
      'https://images.unsplash.com/photo-1630409346824-4f0e7b080087?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'South Indian dosa served with chutneys and sambar',
  },
  {
    id: 'east',
    eyebrow: 'East India',
    title: 'Riverland recipes & celebration sweets',
    description:
      'Eastern kitchens bring together delicate fish preparations, mustard’s sharp warmth, seasonal vegetables, and a celebrated tradition of milk- and chhena-based sweets.',
    highlights: ['Mustard & poppy seeds', 'Freshwater fish', 'Chhena sweets'],
    image:
      'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Indian rice and curry served on a traditional plate',
  },
  {
    id: 'west',
    eyebrow: 'West India',
    title: 'Coastal brightness & bold street-food spirit',
    description:
      'From Gujarat’s sweet-savoury snacks to Maharashtra’s lively street food and Goa’s coastal curries, western India brings lively contrasts, seafood, grains, and sunny spice blends to the table.',
    highlights: ['Coastal seafood', 'Vibrant snacks', 'Tangy spice blends'],
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'A colourful Indian thali with several small dishes',
  },
];

const dishes = [
  {
    id: 'butter-chicken', name: 'Butter Chicken', region: 'north', regionLabel: 'North India', location: 'Delhi & Punjab',
    description: 'Charred chicken in a velvety tomato, butter, and fenugreek gravy.', notes: ['Creamy', 'Tandoori', 'Comfort food'],
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=900&q=85', alt: 'A bowl of creamy Indian chicken curry',
  },
  {
    id: 'chole-bhature', name: 'Chole Bhature', region: 'north', regionLabel: 'North India', location: 'Punjab',
    description: 'Spiced chickpea curry paired with puffy, deep-fried bread.', notes: ['Hearty', 'Chickpeas', 'Street favourite'],
    image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=900&q=85', alt: 'Indian chickpea curry served with bread',
  },
  {
    id: 'masala-dosa', name: 'Masala Dosa', region: 'south', regionLabel: 'South India', location: 'Karnataka & Tamil Nadu',
    description: 'A crisp fermented-rice crêpe wrapped around spiced potato filling.', notes: ['Crisp', 'Fermented', 'Vegetarian'],
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=85', alt: 'A crisp masala dosa served with chutney',
  },
  {
    id: 'kerala-curry', name: 'Kerala Fish Curry', region: 'south', regionLabel: 'South India', location: 'Kerala',
    description: 'Fresh fish simmered with coconut, kokum or tamarind, and curry leaves.', notes: ['Coastal', 'Tangy', 'Coconut'],
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85', alt: 'A bowl of spiced Indian fish curry',
  },
  {
    id: 'momos', name: 'Momos', region: 'east', regionLabel: 'East India', location: 'Sikkim & Darjeeling',
    description: 'Steamed dumplings, often filled with vegetables or minced meat, served with chilli chutney.', notes: ['Steamed', 'Himalayan', 'Snack'],
    image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=900&q=85', alt: 'A plate of steamed dumplings',
  },
  {
    id: 'rasgulla', name: 'Rasgulla', region: 'east', regionLabel: 'East India', location: 'West Bengal & Odisha',
    description: 'Soft, syrup-soaked chhena dumplings with a light, delicate sweetness.', notes: ['Sweet', 'Chhena', 'Celebratory'],
    image: 'https://images.unsplash.com/photo-1666300636207-77d6d66af274?auto=format&fit=crop&w=900&q=85', alt: 'Indian sweets in a serving bowl',
  },
  {
    id: 'vada-pav', name: 'Vada Pav', region: 'west', regionLabel: 'West India', location: 'Mumbai',
    description: 'A spiced potato fritter tucked in a soft bun with fiery chutneys.', notes: ['Street food', 'Spicy', 'Iconic'],
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=900&q=85', alt: 'A spiced potato snack served on a plate',
  },
  {
    id: 'dhokla', name: 'Khaman Dhokla', region: 'west', regionLabel: 'West India', location: 'Gujarat',
    description: 'Light, savoury steamed cakes finished with a mustard-seed tempering.', notes: ['Steamed', 'Tangy', 'Vegetarian'],
    image: 'https://images.unsplash.com/photo-1625242662166-42dd30b8a5f5?auto=format&fit=crop&w=900&q=85', alt: 'A platter of savoury Indian snacks',
  },
];

function FoodImage({ src, alt, className }) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={(event) => {
        event.currentTarget.classList.add('food-image-unavailable');
        event.currentTarget.alt = 'Food image unavailable';
      }}
    />
  );
}

export default function Food() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const visibleDishes = useMemo(
    () => dishes.filter((dish) => selectedRegion === 'all' || dish.region === selectedRegion),
    [selectedRegion],
  );

  const scrollToDishes = () => {
    document.getElementById('signature-dishes')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="food-page">
      <header className="food-hero">
        <div className="food-hero-glow food-hero-glow-one" />
        <div className="food-hero-glow food-hero-glow-two" />
        <div className="container food-hero-content">
          <p className="food-kicker">A journey through India, one plate at a time</p>
          <h1>Indian Food <span>&amp; Cuisine</span></h1>
          <p className="food-hero-copy">India’s culinary map is a living mosaic: a changing landscape of local grains, seasonal produce, age-old techniques, and spice blends passed from one kitchen to the next.</p>
          <div className="food-hero-actions">
            <button type="button" className="food-primary-action" onClick={scrollToDishes}>Explore signature dishes <span aria-hidden="true">↓</span></button>
            <a className="food-text-action" href="#regional-table">Discover regional tables <span aria-hidden="true">→</span></a>
          </div>
          <dl className="food-hero-facts" aria-label="Indian cuisine highlights">
            <div><dt>4</dt><dd>distinct regional journeys</dd></div>
            <div><dt>8</dt><dd>signature dishes to savour</dd></div>
            <div><dt>∞</dt><dd>family recipes to discover</dd></div>
          </dl>
        </div>
      </header>

      <section className="food-introduction" aria-labelledby="food-introduction-title">
        <div className="container food-introduction-layout">
          <div className="food-introduction-copy">
            <p className="food-section-label">More than a menu</p>
            <h2 id="food-introduction-title">Every region has its own delicious dialect.</h2>
            <p>There is no single Indian cuisine. Climate, geography, migration, trade, religion, and local harvests have shaped countless food traditions. What connects them is a joyful attention to balance—heat and tang, texture and aroma, nourishment and celebration.</p>
            <p>This table is only an introduction. Follow the trails of cardamom, mustard, curry leaves, ghee, coconut, and chilli to find a new story in every state.</p>
          </div>
          <aside className="food-spice-panel" aria-label="Core ingredients in Indian cooking">
            <p className="food-section-label">The pantry</p>
            <h3>Small ingredients, unforgettable character</h3>
            <ul>
              <li><span>🌿</span><div><strong>Curry leaves</strong><small>citrusy, nutty warmth</small></div></li>
              <li><span>🟡</span><div><strong>Turmeric</strong><small>earthy colour and depth</small></div></li>
              <li><span>🌶️</span><div><strong>Chilli</strong><small>heat with personality</small></div></li>
              <li><span>🟤</span><div><strong>Garam masala</strong><small>aromatic finishing notes</small></div></li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="food-regions" id="regional-table" aria-labelledby="regional-table-title">
        <div className="container">
          <div className="food-section-heading">
            <p className="food-section-label">Regional kitchens</p>
            <h2 id="regional-table-title">Four tables, countless flavours</h2>
            <p>Travel from the tandoor’s ember to the coast’s coconut groves—without leaving your screen.</p>
          </div>
          <div className="regional-cuisine-list">
            {regionalCuisines.map((cuisine, index) => (
              <article className={`regional-cuisine-card ${index % 2 ? 'regional-cuisine-card-reverse' : ''}`} key={cuisine.id}>
                <div className="regional-cuisine-image-wrap">
                  <FoodImage className="regional-cuisine-image" src={cuisine.image} alt={cuisine.imageAlt} />
                  <span className={`regional-cuisine-number region-${cuisine.id}`}>0{index + 1}</span>
                </div>
                <div className="regional-cuisine-content">
                  <p className={`food-region-tag region-${cuisine.id}`}>{cuisine.eyebrow}</p>
                  <h3>{cuisine.title}</h3>
                  <p>{cuisine.description}</p>
                  <ul className="regional-cuisine-highlights">{cuisine.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="food-dishes" id="signature-dishes" aria-labelledby="signature-dishes-title">
        <div className="container">
          <div className="food-dishes-header">
            <div><p className="food-section-label">Famous dishes</p><h2 id="signature-dishes-title">Find your next favourite plate</h2></div>
            <p>Filter this selection by region and tap into a flavourful starting point for your own food trail.</p>
          </div>
          <div className="food-filter" role="group" aria-label="Filter dishes by Indian region">
            {regions.map((region) => (
              <button type="button" key={region.id} className={selectedRegion === region.id ? 'food-filter-button is-selected' : 'food-filter-button'} aria-pressed={selectedRegion === region.id} onClick={() => setSelectedRegion(region.id)}>{region.label}</button>
            ))}
          </div>
          <p className="food-results-count" aria-live="polite">Showing {visibleDishes.length} {visibleDishes.length === 1 ? 'dish' : 'dishes'}{selectedRegion !== 'all' && ` from ${regions.find((region) => region.id === selectedRegion)?.label}`}.</p>
          {selectedRegion !== 'all' && (
            <button type="button" className="food-reset-filter" onClick={() => setSelectedRegion('all')}>
              Show all flavours
            </button>
          )}
          <div className="food-dishes-grid">
            {visibleDishes.map((dish) => (
              <article className="food-dish-card" key={dish.id}>
                <div className="food-dish-image-wrap"><FoodImage className="food-dish-image" src={dish.image} alt={dish.alt} /><span className={`food-dish-region region-${dish.region}`}>{dish.regionLabel}</span></div>
                <div className="food-dish-content">
                  <p className="food-dish-location">📍 {dish.location}</p><h3>{dish.name}</h3><p>{dish.description}</p>
                  <ul className="food-dish-notes" aria-label={`${dish.name} characteristics`}>{dish.notes.map((note) => <li key={note}>{note}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="food-closing">
        <div className="container food-closing-content">
          <p className="food-section-label">The invitation</p><h2>Come hungry. Leave with a story.</h2>
          <p>India’s most memorable meals are often the ones shared around a home table, at a busy street stall, or during a festival. Let every bite be an invitation to look closer.</p>
          <a href="#regional-table" className="food-closing-link">Return to the regional tables <span aria-hidden="true">↑</span></a>
        </div>
      </section>
    </div>
  );
}
