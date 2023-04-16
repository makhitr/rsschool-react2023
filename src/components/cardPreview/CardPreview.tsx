import React from 'react';
import styles from './CardPreview.module.css';
import { CardPreviewProps } from 'types';

const CardPreview: React.FC<CardPreviewProps> = ({ cardData, onClick }): JSX.Element => {
  return (
    <div className={styles.cardPreviewWrapper} data-testid="card-preview" onClick={onClick}>
      <header className={styles.cardPreviewHeader}>
        <h2> {cardData.name}</h2>
      </header>
      <img src={cardData.image} />
    </div>
  );
};

export default CardPreview;
