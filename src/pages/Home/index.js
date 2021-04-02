import React from 'react';
import SearchWeather from '../../components/SearchWeather';
import Cities from '../../components/Cities';
import './style.css';

const Home = () => {
  return (
    <div className="home">
      <Cities />
      <SearchWeather />
    </div>
  );
};

export default Home;
