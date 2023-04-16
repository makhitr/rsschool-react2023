import React from 'react';
import { ICard } from '../../types';
import Modal from '../modal/Modal';
import styles from './CardsList.module.css';
import CardPreview from '../cardPreview/CardPreview';
import { CardModal } from '../cardModal/CardModal';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';
import { setSelectedCardId, openModal } from '../../app/appSlice';

const CardsList: React.FC = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();

  const handleClick = (id: number): void => {
    dispatch(setSelectedCardId(id));
    dispatch(openModal());
  };

  const cardsData = useSelector((state: RootState) => state.app.entities);

  const isModalOpen = useSelector((state: RootState) => state.app.isOpen);

  return (
    <>
      {isModalOpen && (
        <Modal>
          <CardModal />
        </Modal>
      )}

      <div className={styles.cardSection} data-testid="cards-list">
        {cardsData &&
          cardsData.map((card: ICard) => (
            <CardPreview key={card.id} cardData={card} onClick={() => handleClick(card.id)} />
          ))}
      </div>
    </>
  );
};

export default CardsList;
