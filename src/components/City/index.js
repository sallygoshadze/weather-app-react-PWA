import React from 'react';
import './style.css';

const City = ({ city, position }) => {
  return (
    <div key={city.name} className={`city ${position}`}>
      <h1>
        {city.name}
        <sup>{city.sys.country}</sup>
      </h1>
      <div className="city-info">
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
            alt={city.weather[0].description}
          />
          <h3>{city.weather[0].description}</h3>
        </div>
        <div className="city-details">
          <h3>
            {Math.round(city.main.temp)}
            <sup>&deg;C</sup>
          </h3>
          <p>
            feels like: {Math.round(city.main.feels_like)}
            <sup>&deg;C</sup>
          </p>
          <h4>humidity: {city.main.humidity}</h4>
        </div>
      </div>
    </div>
  );
};

export default City;
