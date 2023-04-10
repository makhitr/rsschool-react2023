import React from 'react';
import { CardsListProps, ICard } from '../../types';
import Modal from '../modal/Modal';
import styles from './CardsList.module.css';
import CardPreview from '../cardPreview/CardPreview';
import FullCard from '../../components/fullCard/FullCard';

const CardsList: React.FC<CardsListProps> = ({ cards }): JSX.Element => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedCardId, setSelectedCardId] = React.useState<number | null>(null);

  function handleClick(card: ICard): void {
    setSelectedCardId(card.id);
    setShowModal(true);
  }

  return (
    <>
      {showModal && (
        <Modal>
          <div
            className={styles.overlay}
            onClick={(event) => {
              if (event.currentTarget === event.target) {
                setShowModal(false);
              }
            }}
          >
            <div className={styles.cardModal}>
              <span className={styles.close} onClick={() => setShowModal(false)} />
              {selectedCardId && <FullCard id={selectedCardId} />}
            </div>
          </div>
        </Modal>
      )}
      <div className={styles.cardSection} data-testid="cards-list">
        {cards.map(
          (card, id) =>
            'location' in card && (
              <CardPreview
                key={`card.name-${id}`}
                cardData={card}
                onClick={() => handleClick(card)}
              />
            )
        )}
      </div>
    </>
  );
};

export default CardsList;
