import React from 'react';
import styles from './Card.module.css';
import { ICard } from 'types';

type CardProps = {
  cardData: ICard;
};

class Card extends React.Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }

  render(): React.ReactNode {
    const { image, name, gender, status, created, species } = this.props.cardData;
    const date = new Date(created).toLocaleDateString();
    return (
      <div className={styles.cardWrapper} data-testid="card">
        <h2> {name}</h2>
        <img src={image} />
        <h3> {gender}</h3>
        <p> {status}</p>
        <p>species: {species}</p>
        <p>created: {date}</p>
      </div>
    );
  }
}

export default Card;
