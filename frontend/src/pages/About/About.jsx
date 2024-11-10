// src/pages/About.js
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>Acerca de Nosotros</h1>
      <p>
        ¡Bienvenido a nuestro sitio web! Somos un equipo apasionado dedicado a proporcionar la mejor experiencia para nuestros usuarios.
        Nuestra misión es hacer todo simple y eficiente, ya sea gestionando tus tareas diarias o ayudándote a alcanzar tus objetivos más rápido.
      </p>
      <p>
        Nuestra plataforma está construida con las últimas tecnologías como React, Vite y Spring Boot, asegurando experiencias rápidas y receptivas.
        Estamos comprometidos en mejorar continuamente nuestra plataforma para satisfacer tus necesidades.
      </p>
      <div className="about-team">
        <h2>Nuestro Equipo</h2>
        <ul>
          <li>Eyder Huayta - Líder de Desarrollo</li>
          <li>Eyder Huayta - Diseñador</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
