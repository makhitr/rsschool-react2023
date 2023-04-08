import React from 'react';
import Card from '../card/Card';
import { CardsListProps } from '../../types';
import Modal from '../../components/modal/Modal';
import styles from './CardsList.module.css';

const CardsList: React.FC<CardsListProps> = ({ cards }): JSX.Element => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>show Modal</button>
      {showModal && (
        <Modal>
          <div
            className={styles.overlay}
            onClick={(event) => {
              if (event.currentTarget === event.target) {
                setShowModal(false);
              }
              console.log(event);
            }}
          >
            <div className={styles.cardModal}>
              <h1>I am a card</h1>
              <button onClick={() => setShowModal(false)}>close</button>
            </div>
          </div>
        </Modal>
      )}
      <div className={styles.cardSection} data-testid="cards-list">
        {cards.map((card, id) => (
          <Card key={`card.name-${id}`} cardData={card} />
        ))}
      </div>
    </>
  );
};

export default CardsList;
