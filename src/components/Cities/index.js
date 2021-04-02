import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft, FiCircle } from 'react-icons/fi';
import { BsFillCircleFill } from 'react-icons/bs';
import { fetchWeather } from '../../fetchData';
import Error from '../Error';
import Loading from '../Loading';
import City from '../City';
import './style.css';

const Cities = () => {
  const [cities, setCities] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getCities = async () => {
    const tbilisi = fetchWeather('tbilisi');
    const batumi = fetchWeather('batumi');
    const kutaisi = fetchWeather('kutaisi');
    const rustavi = fetchWeather('rustavi');
    const gori = fetchWeather('gori');
    setLoading(true);
    try {
      const result = await Promise.all([
        tbilisi,
        batumi,
        kutaisi,
        rustavi,
        gori,
      ]);
      if (result) {
        setLoading(false);
        const data = result.map((res) => res.data);
        setCities(data);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getCities();
  }, []);

  useEffect(() => {
    const lastIndex = cities.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, cities]);

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 3000);
  //   return () => clearInterval(slider);
  // }, [index]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="slider">
      {cities.map((city, cityIndex) => {
        let position = 'nextSlide';
        if (cityIndex === index) {
          position = 'activeSlide';
        }
        if (
          cityIndex === index - 1 ||
          (index === 0 && cityIndex === cities.length - 1)
        ) {
          position = 'lastSlide';
        }
        return <City city={city} position={position} key={cityIndex} />;
      })}
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
      <ul className="dots">
        {cities.map((city, i) => {
          return i === index ? (
            <BsFillCircleFill key={i} className="filled" />
          ) : (
            <FiCircle key={i} onClick={() => setIndex(i)} className="empty" />
          );
        })}
      </ul>
    </div>
  );
};

export default Cities;
