import React from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import CardsList from '../../components/cardsList/CardsList';
import Spinner from '../../components/spinner/Spinner';

const MainPage: React.FC = (): JSX.Element => {
  const [error, setError] = React.useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [cardData, setCardData] = React.useState([]);

  const fetchData = async (url: string) => {
    await fetch(url)
      .then((res) => {
        if (!res.ok) {
          setIsLoaded(true);
          throw Error();
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setIsLoaded(true);
        setCardData(data.results.slice(0, 10));
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error as Error);
      });
  };
  React.useEffect(() => {
    const value = localStorage.getItem('searchValue');
    const url = value
      ? `https://rickandmortyapi.com/api/character/?name=${value}`
      : 'https://rickandmortyapi.com/api/character';

    fetchData(url);
  }, []);

  const handleSearch = (value: string) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${value}`;
    setIsLoaded(false);
    setError(null);
    fetchData(url);
  };

  return (
    <div data-testid="main-page">
      <header>
        <h2>Main Page</h2>
      </header>
      <SearchBar search={handleSearch} />
      {error ? (
        <p>No information is available for a page</p>
      ) : !isLoaded ? (
        <Spinner />
      ) : (
        <CardsList cards={cardData} />
      )}
    </div>
  );
};

export default MainPage;
