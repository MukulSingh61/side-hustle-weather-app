import React from 'react';
import './Highlights.css';

function Highlights() {
  return (
    <div className="highlights">
      <div className="highlight-item">
        <p>UV Index</p>
        <p>5</p>
      </div>
      <div className="highlight-item">
        <p>Wind Status</p>
        <p>7.70 km/h</p>
      </div>
      <div className="highlight-item">
        <p>Sunrise & Sunset</p>
        <p>6:35 AM - 5:42 PM</p>
      </div>
      <div className="highlight-item">
        <p>Humidity</p>
        <p>12%</p>
      </div>
      <div className="highlight-item">
        <p>Visibility</p>
        <p>5.2 km</p>
      </div>
      <div className="highlight-item">
        <p>Air Quality</p>
        <p>105 (Unhealthy)</p>
      </div>
    </div>
  );
}

export default Highlights;
