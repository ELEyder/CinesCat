import React from 'react';
import styles from './Card.module.css'; // Importa el archivo de CSS Module
import { Image } from 'antd';
const Card = ({ id, title, description, genre, imageUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContent}>
      <Image src={`${imageUrl}?t=${new Date().getTime()}`} alt={title} height={200} />

      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <p className={styles.cardDescription}>{genre}</p>
      </div>
    </div>
  );
};

export default Card;
