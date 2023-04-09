import React from 'react';
import Card from '../../components/card/Card';
import SearchBar from '../../components/searchBar/SearchBar';
import styles from './MainPage.module.css';
import data from '../../data';

const MainPage: React.FC = (): JSX.Element => {
  const listItems = data.map((card) => <Card key={card.id} cardData={card} />);

  return (
    <div data-testid="main-page">
      <header>
        <h2>Main Page</h2>
      </header>
      <SearchBar />
      {listItems.length && (
        <div className={styles.cardSection} data-testid="cards-list">
          {listItems}
        </div>
      )}
    </div>
  );
};

export default MainPage;
