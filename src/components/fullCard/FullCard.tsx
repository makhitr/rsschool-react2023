import React from 'react';
import styles from './FullCard.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const FullCard: React.FC = (): JSX.Element => {
  const selectedCard = useSelector((state: RootState) => state.app.selectedCard);

  return (
    <div className={styles.cardWrapper} data-testid="full-card">
      {selectedCard && (
        <>
          <header className={styles.cardHeader}>
            <h2> {selectedCard.name}</h2>
          </header>
          <main className={styles.cardMain}>
            <img src={selectedCard.image} />
            <div>
              <h3>{selectedCard.status}</h3>
              <p>{selectedCard.gender}</p>
              <p>Species: {selectedCard.species}</p>
              <p>Location: {selectedCard.location.name}</p>
              <p>Origin: {selectedCard.origin.name}</p>
              <p>Created: {new Date(selectedCard.created).toLocaleDateString()}</p>
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default FullCard;
