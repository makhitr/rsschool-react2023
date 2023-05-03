import React from 'react';
import FullCard from '../fullCard/FullCard';
import styles from './CardModal.module.css';
import { getCardData } from '../../app/thunks';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { closeModal } from '../../app/appSlice';
import { useAppSelector } from '../../app/hooks';

const CardModal: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const selectedCardId = useAppSelector((state: RootState) => state.app.selectedCardId);

  const handleClick = () => {
    dispatch(closeModal());
  };

  React.useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${selectedCardId}`;
    dispatch(getCardData(url));
  }, [dispatch, selectedCardId]);

  return (
    <div className={styles.cardModal} data-testid="card-modal">
      <span className={styles.close} onClick={handleClick} data-testid="close-modal" />
      <FullCard />
    </div>
  );
};

export default CardModal;
