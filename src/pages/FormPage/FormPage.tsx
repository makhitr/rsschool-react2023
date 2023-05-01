import CardsFormList from '../../components/cardsFormList/CardsFormList';
import React from 'react';

import Form from '../../components/form/Form';
import styles from './FormPage.module.css';

const FormPage: React.FC = (): JSX.Element => {
  return (
    <div className={styles.mainWrapper} data-testid="form-page">
      <h2>Add your favourite character</h2>
      <Form />
      <CardsFormList />
    </div>
  );
};

export default FormPage;
