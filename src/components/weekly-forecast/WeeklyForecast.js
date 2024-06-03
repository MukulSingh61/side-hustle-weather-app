import React from 'react';
import './WeeklyForecast.css';

function WeeklyForecast() {
  const days = [
    { day: 'Sun', temp: '15° - 3°', icon: '☀️' },
    { day: 'Mon', temp: '12° - 7°', icon: '🌧️' },
    { day: 'Tue', temp: '9° - 7°', icon: '☁️' },
    { day: 'Wed', temp: '8° - 1°', icon: '🌧️' },
    { day: 'Thu', temp: '5° - 2°', icon: '❄️' },
    { day: 'Fri', temp: '4° - 4°', icon: '☀️' },
    { day: 'Sat', temp: '3° - 3°', icon: '☀️' }
  ];

  return (
    <div className="weekly-forecast">
      {days.map((day, index) => (
        <div key={index} className="day">
          <p>{day.day}</p>
          <p>{day.temp}</p>
          <p>{day.icon}</p>
        </div>
      ))}
    </div>
  );
}

export default WeeklyForecast;
