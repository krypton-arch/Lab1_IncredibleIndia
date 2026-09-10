import React from 'react';
import './Culture.css';

const cultureStats = [
  { value: '5,000+', label: 'Years of Unbroken Tradition' },
  { value: '8', label: 'Recognised Classical Dances' },
  { value: '43', label: 'UNESCO World Heritage Sites' },
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
    </div>
  );
}
