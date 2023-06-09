import React from 'react';
import { IFormCardModified } from '../../types';
import styles from './CardsFormList.module.css';
import Card from '../card/Card';
import { RootState } from '../../app/store';
import { useAppSelector } from '../../app/hooks';

const CardsFormList: React.FC = (): JSX.Element => {
  const cardsFormData = useAppSelector((state: RootState) => state.app.formData);

  return (
    <>
      <div className={styles.cardSection} data-testid="cardsForm-list">
        {cardsFormData &&
          cardsFormData.map((card: IFormCardModified) => <Card key={card.id} cardData={card} />)}
      </div>
    </>
  );
};

export default CardsFormList;
