import React from 'react';
import styles from './CardPreview.module.css';
import { CardPreviewProps } from 'types';

const CardPreview: React.FC<CardPreviewProps> = ({ cardData, onClick }): JSX.Element => {
  return (
    <div className={styles.cardPreviewWrapper} data-testid="card-preview" onClick={onClick}>
      <h2> {cardData.name}</h2>
      <img src={cardData.image} />
      <h3> {cardData.gender}</h3>
    </div>
  );
};

export default CardPreview;
