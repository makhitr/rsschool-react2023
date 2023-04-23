import CardsFormList from '../../components/cardsFormList/CardsFormList';
import React from 'react';

import Form from '../../components/form/Form';
import styles from './FormPage.module.css';

const FormPage: React.FC = (): JSX.Element => {
  return (
    <div className={styles.mainWrapper} data-testid="form-page">
      Add your favourite character
      <Form />
      <CardsFormList />
    </div>
  );
};

export default FormPage;
