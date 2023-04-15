import React from 'react';
import { ICard } from '../../types';
import Modal from '../modal/Modal';
import styles from './CardsList.module.css';
import CardPreview from '../cardPreview/CardPreview';
import FullCard from '../../components/fullCard/FullCard';
import { useSelector } from 'react-redux';
import { RootState } from 'app/types';

const CardsList: React.FC = (): JSX.Element => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedCardId, setSelectedCardId] = React.useState<number | null>(null);

  function handleClick(card: ICard): void {
    setSelectedCardId(card.id);
    setShowModal(true);
  }

  const cardsData = useSelector((state: RootState) => state.app.entities);

  return (
    <>
      {showModal && (
        <Modal onClose={setShowModal}>
          <div className={styles.cardModal}>
            <span className={styles.close} onClick={() => setShowModal(false)} />
            {selectedCardId && <FullCard id={selectedCardId} />}
          </div>
        </Modal>
      )}
      <div className={styles.cardSection} data-testid="cards-list">
        {cardsData.map(
          (card: ICard) =>
            'location' in card && (
              <CardPreview key={card.id} cardData={card} onClick={() => handleClick(card)} />
            )
        )}
      </div>
    </>
  );
};

export default CardsList;
