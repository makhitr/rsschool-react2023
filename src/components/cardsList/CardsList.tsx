import React from 'react';
import Card from '../card/Card';
import { CardsListProps } from '../../types';
import styles from './CardsList.module.css';

const CardsList: React.FC<CardsListProps> = ({ cards }): JSX.Element => {
  return (
    <div className={styles.cardSection} data-testid="cards-list">
      {cards.map((card, id) => (
        <Card key={`card.name-${id}`} cardData={card} />
      ))}
    </div>
  );
};

export default CardsList;
