import React from 'react';
import styles from './FullCard.module.css';
import { FullCardProps, ICard } from '../../types';

const FullCard: React.FC<FullCardProps> = ({ id }): JSX.Element => {
  const [cardData, setCardData] = React.useState<ICard | null>(null);

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCardData(data));
  }, [id]);
  return (
    <>
      {cardData && (
        <div className={styles.cardWrapper} data-testid="full-card">
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

export default FullCard;
