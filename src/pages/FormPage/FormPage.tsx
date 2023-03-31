import React from 'react';
import { FormPageState, IFormCard } from 'types';
import Card from '../../components/card/Card';
import Form from '../../components/form/Form';
import styles from './FormPage.module.css';

class FormPage extends React.Component {
  state: FormPageState = {
    cardList: [],
  };

  createCard = (card: IFormCard) => {
    this.setState((prevState: FormPageState) => ({
      ...prevState,
      cardList: [...prevState.cardList, card],
    }));
  };

  render() {
    const listItems = this.state.cardList.map((card, id) => (
      <Card key={`card.name-${id}`} cardData={card} />
    ));

    return (
      <div className={styles.mainWrapper} data-testid="form-page">
        Add your favourite character
        <Form createCard={this.createCard} />
        <div className={styles.cardSection} data-testid="cards-list">
          {this.state.cardList && listItems}
        </div>
      </div>
    );
  }
}

export default FormPage;
