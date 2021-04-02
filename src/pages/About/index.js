import React from 'react';
import './style.css';

const About = () => {
  return (
    <div className="about">
      <h1>About us</h1>
      <p>
        This is a weather application for checking current weather around the
        world.
        <br />
        <br />
        Created by{' '}
        <a
          href="https://github.com/sallygoshadze"
          target="_blank"
          rel="noreferrer"
        >
          @sallygoshadze
        </a>
      </p>
    </div>
  );
};

export default About;
