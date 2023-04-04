import { useEffect, useState } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import CardsList from '../../components/cardsList/CardsList';

const MainPage: React.FC = (): JSX.Element => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    try {
      fetch('https://rickandmortyapi.com/api/character')
        .then((res) => {
          if (!res.ok) {
            throw Error('Something wrong');
          } else {
            return res.json();
          }
        })
        .then((data) => setCardData(data.results.slice(0, 10)));
    } catch (err) {
      console.log((err as Error).message);
    }
  }, []);

  return (
    <div data-testid="main-page">
      <header>
        <h2>Main Page</h2>
      </header>
      <SearchBar />

      <CardsList cards={cardData} />
    </div>
  );
};

export default MainPage;
