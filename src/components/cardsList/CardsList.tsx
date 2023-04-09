import React from 'react';
import Card from '../card/Card';
import { CardsListProps, ICard, IFormCardModified } from '../../types';
import Modal from '../modal/Modal';
import styles from './CardsList.module.css';
import CardPreview from '../cardPreview/CardPreview';

const CardsList: React.FC<CardsListProps> = ({ cards }): JSX.Element => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState<ICard | IFormCardModified | null>(null);

  function handleClick(card: ICard | IFormCardModified): void {
    setSelectedCard(card);
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
              <Card cardData={selectedCard} />
            </div>
          </div>
        </Modal>
      )}
      <div className={styles.cardSection} data-testid="cards-list">
        {cards.map((card, id) => (
          <CardPreview key={`card.name-${id}`} cardData={card} onClick={() => handleClick(card)} />
        ))}
      </div>
    </>
  );
};

export default CardsList;
