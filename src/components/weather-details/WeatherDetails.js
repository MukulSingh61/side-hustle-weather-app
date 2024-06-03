import React from 'react';
import './WeatherDetails.css';
import cloudyNight1 from './../../res/weather_icons/static/cloudy-night-1.svg';

function WeatherDetails() {
  return (
    <div className="weather-details">
      <div className="current-weather">
        <div className="weather-icon">
          <img src={cloudyNight1} alt="cloudy-night-1"/>
        </div>
        <div className="temperature">
          <h1>12°C</h1>
          <p>Monday, 16:00</p>
          <p>Mostly Cloudy</p>
          <p>Rain - 30%</p>
          <p>New York, NY, USA</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
