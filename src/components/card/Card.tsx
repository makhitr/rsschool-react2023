import React from 'react';
import styles from './Card.module.css';
import { CardProps } from 'types';

const Card: React.FC<CardProps> = ({ cardData }): JSX.Element => {
  const imageSrc = 'episode' in cardData ? cardData.image : URL.createObjectURL(cardData.image[0]);

  return (
    <div className={styles.cardWrapper} data-testid="card">
      <h2> {cardData.name}</h2>
      <img src={imageSrc} />
      <h3> {cardData.gender}</h3>
      <p> {cardData.status}</p>
      <p>species: {cardData.species}</p>
      <p>created: {new Date(cardData.created).toLocaleDateString()}</p>
    </div>
  );
};

export default Card;
