import React from 'react';
import './Culture.css';

const cultureStats = [
  { value: '5,000+', label: 'Years of Unbroken Tradition' },
  { value: '8', label: 'Recognised Classical Dances' },
  { value: '40+', label: 'UNESCO World Heritage Sites' },
  { value: '19,500+', label: 'Mother Tongues & Dialects' }
];

const culturePillars = [
  {
    id: 'faith',
    title: 'Faith & Philosophy',
    text: 'The cradle of Hinduism, Buddhism, Jainism and Sikhism, where seeking is treated as a lifelong discipline rather than a destination.'
  },
  {
    id: 'arts',
    title: 'The Performing Arts',
    text: 'Dance, raga and drama descend from the Natya Shastra, a treatise on performance compiled more than two thousand years ago.'
  },
  {
    id: 'craft',
    title: 'Craft & Textile',
    text: 'Handloom weaving, block printing, brass casting and miniature painting are still practised in the families that invented them.'
  },
  {
    id: 'plurality',
    title: 'Plurality as Practice',
    text: 'Twenty-two scheduled languages and every major world religion share a single calendar of festivals, food and public life.'
  }
];

const festivals = [
  {
    id: 'diwali',
    name: 'Diwali',
    season: 'October – November',
    region: 'Nationwide',
    theme: 'lamp',
    text: 'The festival of lights. Rows of clay diyas mark the return of Rama to Ayodhya, and with it the ordinary human hope that light outlasts darkness.'
  },
  {
    id: 'holi',
    name: 'Holi',
    season: 'March',
    region: 'North & West India',
    theme: 'colour',
    text: 'Spring arrives as a public truce. Powdered colour dissolves rank and age for a day, and the streets belong equally to everyone in them.'
  },
  {
    id: 'durga-puja',
    name: 'Durga Puja',
    season: 'September – October',
    region: 'West Bengal & the East',
    theme: 'idol',
    text: 'For five days Kolkata becomes an open-air gallery of commissioned pandals, each an original artwork built to be dismantled at the end.'
  },
  {
    id: 'eid',
    name: 'Eid-ul-Fitr',
    season: 'Varies (lunar)',
    region: 'Nationwide',
    theme: 'crescent',
    text: 'The sighting of the new moon closes Ramadan. Congregational prayer at dawn gives way to sewaiyan, new clothes and open households.'
  },
  {
    id: 'onam',
    name: 'Onam',
    season: 'August – September',
    region: 'Kerala',
    theme: 'floral',
    text: 'A harvest festival for the returning king Mahabali, kept with intricate floral pookalam, snake-boat races and the twenty-six dish Onasadya.'
  },
  {
    id: 'pongal',
    name: 'Pongal',
    season: 'January',
    region: 'Tamil Nadu',
    theme: 'harvest',
    text: 'Four days of thanks to the sun, the rain and the cattle. The first rice of the season is boiled until it spills over, which is the point.'
  }
];

const classicalDances = [
  {
    id: 'bharatanatyam',
    name: 'Bharatanatyam',
    origin: 'Tamil Nadu',
    text: 'The oldest of the classical forms. Geometric line, a grounded half-seated stance, and a vocabulary of hand gestures precise enough to narrate scripture.'
  },
  {
    id: 'kathak',
    name: 'Kathak',
    origin: 'Uttar Pradesh',
    text: 'Storytelling from temple courtyards that matured in Mughal courts. Known for lightning pirouettes and rhythmic footwork answering the tabla.'
  },
  {
    id: 'kathakali',
    name: 'Kathakali',
    origin: 'Kerala',
    text: 'Dance-drama in elaborate green and crimson makeup, where the eyes and eyebrows carry the dialogue through performances that once ran all night.'
  },
  {
    id: 'odissi',
    name: 'Odissi',
    origin: 'Odisha',
    text: 'Reconstructed from temple sculpture at Konark and Puri. Fluid torso movement and the tribhangi three-bend pose give it its characteristic softness.'
  },
  {
    id: 'kuchipudi',
    name: 'Kuchipudi',
    origin: 'Andhra Pradesh',
    text: 'Begun by travelling brahmin troupes, it blends speech with dance and is famous for passages performed balanced on the rim of a brass plate.'
  },
  {
    id: 'manipuri',
    name: 'Manipuri',
    origin: 'Manipur',
    text: 'Devotional and deliberately unemphatic. The dancer avoids sharp accent entirely, producing a continuous, almost floating quality of movement.'
  }
];

const musicTraditions = [
  {
    id: 'hindustani',
    name: 'Hindustani',
    scope: 'Northern India',
    text: 'Shaped by Persian and Central Asian contact, it favours long improvisational unfolding — an alap can explore a single raga for forty minutes before the rhythm enters.',
    points: ['Khayal & Dhrupad vocal forms', 'Gharana lineages of teaching', 'Tabla and sarangi accompaniment']
  },
  {
    id: 'carnatic',
    name: 'Carnatic',
    scope: 'Southern India',
    text: 'More composition-led, built on a fixed repertoire of kritis by Tyagaraja and his contemporaries, with improvisation worked tightly around the written line.',
    points: ['Kriti-centred repertoire', 'Complex tala cycles', 'Violin, mridangam and ghatam']
  }
];

const instruments = [
  { id: 'sitar', name: 'Sitar', family: 'Plucked string' },
  { id: 'tabla', name: 'Tabla', family: 'Percussion' },
  { id: 'bansuri', name: 'Bansuri', family: 'Bamboo flute' },
  { id: 'veena', name: 'Veena', family: 'Plucked string' },
  { id: 'sarod', name: 'Sarod', family: 'Fretless string' },
  { id: 'mridangam', name: 'Mridangam', family: 'Percussion' },
  { id: 'shehnai', name: 'Shehnai', family: 'Double reed' },
  { id: 'santoor', name: 'Santoor', family: 'Hammered string' }
];

const traditionalClothing = [
  {
    id: 'saree',
    name: 'Saree',
    region: 'Nationwide',
    text: 'A single unstitched length of five to nine yards, draped in more than eighty regional styles. The Nivi drape is the most common; Bengal, Maharashtra and Tamil Nadu each keep their own.',
    weave: 'Banarasi • Kanjeevaram • Jamdani'
  },
  {
    id: 'kurta',
    name: 'Kurta & Churidar',
    region: 'North India',
    text: 'A loose knee-length tunic over tapered trousers gathered at the ankle. Worn by all genders, and the most durable everyday survivor of pre-colonial dress.',
    weave: 'Cotton • Khadi • Chikankari'
  },
  {
    id: 'lehenga',
    name: 'Lehenga Choli',
    region: 'Rajasthan & Gujarat',
    text: 'A full pleated skirt with fitted blouse and draped dupatta. Desert traditions load it with mirror-work, bandhani tie-dye and dense hand embroidery.',
    weave: 'Bandhani • Gota Patti • Zardozi'
  },
  {
    id: 'dhoti',
    name: 'Dhoti & Veshti',
    region: 'Pan-Indian, esp. the South',
    text: 'Unstitched cloth wrapped at the waist and knotted, worn plain white with a coloured border for temple visits and formal south Indian occasions.',
    weave: 'Handloom cotton • Silk border'
  },
  {
    id: 'sherwani',
    name: 'Sherwani',
    region: 'North India',
    text: 'A long fitted coat that entered the subcontinent through Mughal and later Awadhi courts, now the standard formal wear for grooms across religions.',
    weave: 'Brocade • Silk • Velvet'
  },
  {
    id: 'mekhela',
    name: 'Mekhela Chador',
    region: 'Assam',
    text: 'Two pieces worn together — a cylindrical lower skirt and an upper drape — traditionally woven in golden muga silk produced only in Assam.',
    weave: 'Muga • Pat • Eri silk'
  }
];

const monuments = [
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    place: 'Agra, Uttar Pradesh',
    period: '1632 – 1653',
    text: 'A white marble mausoleum built by Shah Jahan for Mumtaz Mahal. Its symmetry is exact in every axis but one: his own cenotaph, added later, breaks it.'
  },
  {
    id: 'qutub-minar',
    name: 'Qutub Minar',
    place: 'Delhi',
    period: '1199 – 1220',
    text: 'A 73-metre fluted sandstone tower, the tallest brick minaret in the world, ringed by bands of Quranic calligraphy cut directly into the stone.'
  },
  {
    id: 'konark',
    name: 'Konark Sun Temple',
    place: 'Konark, Odisha',
    period: '13th century',
    text: 'Conceived as the sun god\u2019s chariot: twenty-four carved stone wheels and seven horses, with the wheels precise enough to be read as sundials.'
  },
  {
    id: 'khajuraho',
    name: 'Khajuraho Temples',
    place: 'Chhatarpur, Madhya Pradesh',
    period: '950 – 1050',
    text: 'Chandela-era temples in sandstone, celebrated for sculpture that treats devotion, labour and desire as parts of a single continuous surface.'
  },
  {
    id: 'red-fort',
    name: 'Red Fort',
    place: 'Delhi',
    period: '1638 – 1648',
    text: 'The Mughal seat of power in Shahjahanabad, and the site from which the Prime Minister addresses the nation every Independence Day.'
  },
  {
    id: 'hawa-mahal',
    name: 'Hawa Mahal',
    place: 'Jaipur, Rajasthan',
    period: '1799',
    text: 'A five-storey screen of 953 small windows, built so the women of the court could watch the street below without being seen from it.'
  }
];

const heritageSites = [
  { id: 'ajanta', name: 'Ajanta & Ellora Caves', state: 'Maharashtra', year: '1983', kind: 'Cultural' },
  { id: 'hampi', name: 'Group of Monuments at Hampi', state: 'Karnataka', year: '1986', kind: 'Cultural' },
  { id: 'mahabalipuram', name: 'Monuments at Mahabalipuram', state: 'Tamil Nadu', year: '1984', kind: 'Cultural' },
  { id: 'sanchi', name: 'Buddhist Monuments at Sanchi', state: 'Madhya Pradesh', year: '1989', kind: 'Cultural' },
  { id: 'jaipur', name: 'Walled City of Jaipur', state: 'Rajasthan', year: '2019', kind: 'Cultural' },
  { id: 'kaziranga', name: 'Kaziranga National Park', state: 'Assam', year: '1985', kind: 'Natural' },
  { id: 'sundarbans', name: 'Sundarbans National Park', state: 'West Bengal', year: '1987', kind: 'Natural' },
  { id: 'western-ghats', name: 'Western Ghats', state: 'Six states', year: '2012', kind: 'Natural' }
];

/**
 * Decorative motif for each festival card. Purely presentational — the parent
 * marks it aria-hidden, so these carry no title or role.
 */
function FestivalMark({ theme }) {
  const common = {
    viewBox: '0 0 64 64',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    focusable: 'false'
  };

  switch (theme) {
    case 'lamp':
      return (
        <svg {...common}>
          <path d="M32 10c3 4 3 7 0 10-3-3-3-6 0-10Z" fill="currentColor" stroke="none" />
          <path d="M14 34h36c0 8-8 14-18 14s-18-6-18-14Z" />
          <path d="M20 34c0-4 5-7 12-7s12 3 12 7" />
        </svg>
      );
    case 'colour':
      return (
        <svg {...common}>
          <circle cx="25" cy="27" r="12" />
          <circle cx="39" cy="27" r="12" />
          <circle cx="32" cy="39" r="12" />
        </svg>
      );
    case 'idol':
      return (
        <svg {...common}>
          <path d="M32 8v48" />
          <path d="M20 20v-8M44 20v-8" />
          <path d="M18 26c0-8 6-14 14-14s14 6 14 14" />
          <path d="M18 26h28" />
        </svg>
      );
    case 'crescent':
      return (
        <svg {...common}>
          <path d="M40 12a20 20 0 1 0 8 34 22 22 0 0 1-8-34Z" />
          <path d="m48 16 2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'floral':
      return (
        <svg {...common}>
          <circle cx="32" cy="32" r="6" />
          <path d="M32 12c6 6 6 10 0 14-6-4-6-8 0-14ZM32 52c-6-6-6-10 0-14 6 4 6 8 0 14Z" />
          <path d="M12 32c6-6 10-6 14 0-4 6-8 6-14 0ZM52 32c-6 6-10 6-14 0 4-6 8-6 14 0Z" />
        </svg>
      );
    case 'harvest':
      return (
        <svg {...common}>
          <path d="M22 30h20l-2 20H24l-2-20Z" />
          <path d="M18 30h28" />
          <path d="M32 22v-8M24 24l-4-6M40 24l4-6" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="32" cy="32" r="16" />
        </svg>
      );
  }
}

export default function Culture() {
  return (
    <div className="culture-page">
      {/* ============ Hero ============ */}
      <section className="culture-hero">
        <div className="culture-hero__pattern" aria-hidden="true" />
        <div className="container culture-hero__inner">
          <span className="culture-hero__eyebrow">
            विविधता में एकता &nbsp;&bull;&nbsp; Unity in Diversity
          </span>
          <h1 className="culture-hero__title">
            Culture &amp; <span className="culture-hero__accent">Heritage</span>
          </h1>
          <p className="culture-hero__lead">
            India is less a single culture than a conversation between hundreds of them &mdash;
            carried forward in ragas and rituals, in woven cloth and carved stone, and in festivals
            that still empty the streets of every city each year.
          </p>

          <dl className="culture-hero__stats">
            {cultureStats.map((stat) => (
              <div key={stat.label} className="culture-stat">
                <dt className="culture-stat__value">{stat.value}</dt>
                <dd className="culture-stat__label">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ============ Introduction ============ */}
      <section className="culture-section culture-intro" aria-labelledby="intro-heading">
        <div className="container">
          <div className="culture-section__head">
            <span className="badge badge-saffron">An Introduction</span>
            <h2 className="section-title" id="intro-heading">
              A Civilisation Still in Progress
            </h2>
            <p className="section-subtitle">
              What makes Indian culture unusual is not only its age, but its continuity. The
              traditions below are not preserved behind glass &mdash; they are performed, worn,
              cooked and argued over every day.
            </p>
          </div>

          <div className="culture-intro__grid">
            <article className="culture-intro__lead-card">
              <h3>Continuity Over Millennia</h3>
              <p>
                The Sanskrit hymns recited at a wedding this morning belong to a body of text older
                than the pyramids at Giza. The same city that runs a metro system schedules it
                around a temple procession. India rarely replaces the old with the new; it layers
                one on top of the other and lets both stand.
              </p>
              <p>
                That layering is visible everywhere &mdash; in a skyline where a Mughal dome sits
                beside a glass tower, in a music school teaching Carnatic vocal alongside film
                scoring, and in a wardrobe holding both a handwoven Banarasi silk and a pair of
                jeans.
              </p>
            </article>

            <ul className="culture-pillars">
              {culturePillars.map((pillar) => (
                <li key={pillar.id} className="culture-pillar">
                  <h4 className="culture-pillar__title">{pillar.title}</h4>
                  <p className="culture-pillar__text">{pillar.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ Festivals ============ */}
      <section
        className="culture-section culture-section--tinted"
        aria-labelledby="festivals-heading"
      >
        <div className="container">
          <div className="culture-section__head">
            <span className="badge badge-saffron">The Calendar</span>
            <h2 className="section-title" id="festivals-heading">
              Festivals
            </h2>
            <p className="section-subtitle">
              There is no month without one. A few are observed from Kashmir to Kanyakumari;
              most belong to a single state, language or valley.
            </p>
          </div>

          <div className="festival-grid">
            {festivals.map((festival) => (
              <article
                key={festival.id}
                className={`festival-card festival-card--${festival.theme}`}
              >
                <div className="festival-card__art" aria-hidden="true">
                  <FestivalMark theme={festival.theme} />
                </div>
                <div className="festival-card__body">
                  <div className="festival-card__meta">
                    <span className="festival-card__season">{festival.season}</span>
                    <span className="festival-card__region">{festival.region}</span>
                  </div>
                  <h3 className="festival-card__name">{festival.name}</h3>
                  <p className="festival-card__text">{festival.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Traditional Dance ============ */}
      <section className="culture-section" aria-labelledby="dance-heading">
        <div className="container">
          <div className="culture-section__head">
            <span className="badge badge-green">Movement</span>
            <h2 className="section-title" id="dance-heading">
              Traditional Dance
            </h2>
            <p className="section-subtitle">
              Eight forms hold classical status, each codified in a different region and language,
              and each still taught through years of one-to-one apprenticeship.
            </p>
          </div>

          <ol className="dance-grid">
            {classicalDances.map((dance, index) => (
              <li key={dance.id} className="dance-card">
                <span className="dance-card__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="dance-card__content">
                  <h3 className="dance-card__name">{dance.name}</h3>
                  <span className="dance-card__origin">{dance.origin}</span>
                  <p className="dance-card__text">{dance.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ Music ============ */}
      <section
        className="culture-section culture-section--tinted"
        aria-labelledby="music-heading"
      >
        <div className="container">
          <div className="culture-section__head">
            <span className="badge badge-saffron">Sound</span>
            <h2 className="section-title" id="music-heading">
              Music
            </h2>
            <p className="section-subtitle">
              Two classical systems share a common ancestor and split around the thirteenth
              century. Both organise melody by raga and time by tala.
            </p>
          </div>

          <div className="music-split">
            {musicTraditions.map((tradition) => (
              <article key={tradition.id} className="music-card">
                <header className="music-card__head">
                  <h3 className="music-card__name">{tradition.name}</h3>
                  <span className="music-card__scope">{tradition.scope}</span>
                </header>
                <p className="music-card__text">{tradition.text}</p>
                <ul className="music-card__points">
                  {tradition.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <h3 className="instruments-heading">Instruments of the Tradition</h3>
          <ul className="instrument-list">
            {instruments.map((instrument) => (
              <li key={instrument.id} className="instrument-chip">
                <span className="instrument-chip__name">{instrument.name}</span>
                <span className="instrument-chip__family">{instrument.family}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ Traditional Clothing ============ */}
      <section className="culture-section" aria-labelledby="clothing-heading">
        <div className="container">
          <div className="culture-section__head">
            <span className="badge badge-green">Textile</span>
            <h2 className="section-title" id="clothing-heading">
              Traditional Clothing
            </h2>
            <p className="section-subtitle">
              Indian dress is largely a tradition of draping rather than tailoring, and the cloth
              itself &mdash; who wove it, and where &mdash; usually matters more than the cut.
            </p>
          </div>

          <div className="clothing-grid">
            {traditionalClothing.map((item) => (
              <article key={item.id} className="clothing-card">
                <div className="clothing-card__top">
                  <h3 className="clothing-card__name">{item.name}</h3>
                  <span className="clothing-card__region">{item.region}</span>
                </div>
                <p className="clothing-card__text">{item.text}</p>
                <p className="clothing-card__weave">
                  <span className="clothing-card__weave-label">Typical weaves</span>
                  {item.weave}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Historical Monuments ============ */}
      <section
        className="culture-section culture-section--tinted"
        aria-labelledby="monuments-heading"
      >
        <div className="container">
          <div className="culture-section__head">
            <span className="badge badge-saffron">Built Heritage</span>
            <h2 className="section-title" id="monuments-heading">
              Historical Monuments
            </h2>
            <p className="section-subtitle">
              Temple, fort, tomb and observatory &mdash; the subcontinent&rsquo;s architecture
              records every dynasty that governed it, usually by building over the last one.
            </p>
          </div>

          <div className="monument-grid">
            {monuments.map((monument) => (
              <article key={monument.id} className="monument-card">
                <div className="monument-card__arch" aria-hidden="true">
                  <span className="monument-card__period">{monument.period}</span>
                </div>
                <div className="monument-card__body">
                  <h3 className="monument-card__name">{monument.name}</h3>
                  <p className="monument-card__place">{monument.place}</p>
                  <p className="monument-card__text">{monument.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Heritage Sites ============ */}
      <section className="culture-section" aria-labelledby="heritage-heading">
        <div className="container">
          <div className="culture-section__head">
            <span className="badge badge-green">UNESCO Inscribed</span>
            <h2 className="section-title" id="heritage-heading">
              Heritage Sites
            </h2>
            <p className="section-subtitle">
              India carries more than forty World Heritage Sites. A selection is listed below with
              the year each was inscribed.
            </p>
          </div>

          <div className="heritage-table-wrap">
            <table className="heritage-table">
              <caption className="heritage-table__caption">
                Selected UNESCO World Heritage Sites in India
              </caption>
              <thead>
                <tr>
                  <th scope="col">Site</th>
                  <th scope="col">State</th>
                  <th scope="col">Category</th>
                  <th scope="col">Inscribed</th>
                </tr>
              </thead>
              <tbody>
                {heritageSites.map((site) => (
                  <tr key={site.id}>
                    <th scope="row" className="heritage-table__name">
                      {site.name}
                    </th>
                    <td>{site.state}</td>
                    <td>
                      <span
                        className={`heritage-kind heritage-kind--${site.kind.toLowerCase()}`}
                      >
                        {site.kind}
                      </span>
                    </td>
                    <td className="heritage-table__year">{site.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
