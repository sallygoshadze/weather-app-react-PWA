import axios from 'axios';
import { KEY } from './config.js';

const URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (query) => {
  return axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: KEY,
    },
  });
};
