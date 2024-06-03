import './App.css';
import WeatherDetails from './components/weather-details/WeatherDetails';
import WeeklyForecast from './components/weekly-forecast/WeeklyForecast';
import Highlights from './components/highlights/Highlights';

function App() {
  return (
    <div className="app">
      <div className="search-bar">
        <input type="text" placeholder="Search for places..." />
        <button>Search</button>
      </div>
      <WeatherDetails />
      <WeeklyForecast />
      <Highlights />
    </div>
  );
}

export default App;
