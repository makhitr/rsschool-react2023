import CardsList from '../../components/cardsList/CardsList';
import React from 'react';
import { IFormCardModified } from 'types';
import Form from '../../components/form/Form';
import styles from './FormPage.module.css';

const FormPage: React.FC = (): JSX.Element => {
  const [cardsList, setCardsList] = React.useState<IFormCardModified[]>([]);

  const createCard = (card: IFormCardModified) => {
    setCardsList((prevState) => [...prevState, card]);
  };

  return (
    <div className={styles.mainWrapper} data-testid="form-page">
      Add your favourite character
      <Form createCard={createCard} />
      <CardsList cards={cardsList} />
    </div>
  );
};

export default FormPage;
