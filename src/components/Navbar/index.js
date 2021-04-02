import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  const [navClass, setNavClass] = useState('nav-links');

  const toggleNav = () => {
    if (navClass === 'nav-links') {
      setNavClass('nav-links nav-active');
    } else if (navClass === 'nav-links nav-active') {
      setNavClass('nav-links');
    }
  };
  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="logo">
          <img
            src="https://iconarchive.com/download/i76816/wineass/ios7-redesign/Weather.ico"
            alt="logo"
          />
          <h1>Weather App</h1>
        </Link>
      </div>
      <ul className={navClass}>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
      <div className="burger" onClick={toggleNav}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
