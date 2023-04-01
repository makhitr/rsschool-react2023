import CardList from '../../components/cardsList/CardsList';
import React from 'react';
import { IFormCard } from 'types';
import Form from '../../components/form/Form';
import styles from './FormPage.module.css';

const FormPage: React.FC = (): JSX.Element => {
  const [cardsList, setCardsList] = React.useState<IFormCard[]>([]);

  const createCard = (card: IFormCard) => {
    setCardsList((prevState) => [...prevState, card]);
  };

  return (
    <div className={styles.mainWrapper} data-testid="form-page">
      Add your favourite character
      <Form createCard={createCard} />
      <CardList cards={cardsList} />
    </div>
  );
};

export default FormPage;
