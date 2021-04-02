import React, { useState } from 'react';
import { fetchWeather } from '../../fetchData';
import Weather from '../Weather';
import Loading from '../Loading';
import './style.css';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleKeyPress = async (e) => {
    try {
      if (e.key === 'Enter') {
        setError('');
        setLoading(true);
        const { data } = await fetchWeather(query);
        if (data) {
          setLoading(false);
          setWeather(data);
          setQuery('');
        }
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError('City not found :(');
    }
  };

  const handleClick = async () => {
    try {
      setError('');
      setLoading(true);
      const { data } = await fetchWeather(query);
      if (data) {
        setLoading(false);
        setWeather(data);
        setQuery('');
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError('City not found :(');
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="search-container">
      <div className="search-box">
        <p>Check the current weather</p>
        <input
          type="text"
          className="search-input"
          placeholder="Enter a city ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleClick}>Search</button>
        {error && <div className="error-msg">{error}</div>}
      </div>

      {weather.main && <Weather weather={weather} />}
    </div>
  );
};

export default SearchBox;
