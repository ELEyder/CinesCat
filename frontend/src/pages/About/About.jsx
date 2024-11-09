// src/pages/About.js
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are a passionate team dedicated to providing the best experience for our users.
        Our mission is to make everything simple and efficient, whether it's managing your day-to-day tasks or helping you
        achieve your goals faster.
      </p>
      <p>
        Our platform is built using the latest technologies like React, Vite, and Spring Boot, ensuring fast and responsive
        experiences. We are committed to continuously improving our platform to meet your needs.
      </p>
      <div className="about-team">
        <h2>Our Team</h2>
        <ul>
          <li>Eyder Huayta - CEO</li>
          <li>Eyder Huayta - CTO</li>
          <li>Eyder Huayta - Lead Developer</li>
          <li>Eyder Huayta - Designer</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
