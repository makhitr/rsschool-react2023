import React from 'react';
import { IFormCard } from 'types';
import Card from '../../components/card/Card';
import Form from '../../components/form/Form';

class FormPage extends React.Component {
  state = {
    cardList: null,
  };

  createCard = (card: IFormCard) => {
    this.setState({ cardList: card });
    console.log('create card func');
  };

  render() {
    return (
      <>
        <Form createCard={this.createCard} />
        {this.state.cardList && <Card cardData={this.state.cardList} />}
      </>
    );
  }
}

export default FormPage;
