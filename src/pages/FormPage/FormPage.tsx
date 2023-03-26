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
    console.log(this.state);
  };

  render() {
    const listItems = this.state.cardList.map((card, id) => (
      <Card key={`card.name-${id}`} cardData={card} />
    ));

    return (
      <div className={styles.mainWrapper}>
        {' '}
        Add your favourite character
        <Form createCard={this.createCard} />
        {this.state.cardList && <div className={styles.cardSection}>{listItems}</div>}
      </div>
    );
  }
}

export default FormPage;
