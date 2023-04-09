import React from 'react';
import styles from './Card.module.css';
import { CardProps } from 'types';

const Card: React.FC<CardProps> = ({ cardData }): JSX.Element => {
  return (
    <>
      {cardData && (
        <div className={styles.cardWrapper} data-testid="card">
          <header className={styles.cardHeader}>
            <h2> {cardData.name}</h2>
          </header>
          <main className={styles.cardMain}>
            <img src={cardData.image} />
            <div>
              <h3>{cardData.status}</h3>
              <p>{cardData.gender}</p>
              <p>Species: {cardData.species}</p>
              {'location' in cardData && (
                <>
                  <p>Location: {cardData.location.name}</p>
                  <p>Origin: {cardData.origin.name}</p>
                </>
              )}
              <p>Created: {new Date(cardData.created).toLocaleDateString()}</p>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Card;
