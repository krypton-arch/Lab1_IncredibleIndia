import React from 'react';
import './Food.css';

export default function Food() {
  return (
    <div className="page-container food-page">
      <div className="placeholder-banner">
        <span className="badge badge-saffron">Feature Branch: feature/joshua-food</span>
        <h1>Indian Food & Cuisine</h1>
        <p>This page is assigned to <strong>Joshua (Student 4)</strong>.</p>
        <p className="placeholder-desc">
          Regional cuisines spanning North, South, East, and West India along with signature delicacies will be integrated here via Pull Request.
        </p>
      </div>
    </div>
  );
}
