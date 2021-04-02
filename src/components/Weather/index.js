import React from 'react';
import './style.css';

const Weather = ({ weather }) => {
  return (
    <div className="weather-container">
      <div className="weather-info">
        <h3>
          {weather.name}
          <sup>{weather.sys.country}</sup>
        </h3>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt={weather.weather[0].description}
        />
        <p>{weather.weather[0].description}</p>
      </div>
      <div className="weather-details">
        <h4>
          {Math.round(weather.main.temp)}
          <sup>&deg;C</sup>
        </h4>
        <p>
          feels like: {Math.round(weather.main.feels_like)}
          <sup>&deg;C</sup>
        </p>
      </div>
    </div>
  );
};

export default Weather;
