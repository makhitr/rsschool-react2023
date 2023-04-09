import React from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import CardsList from '../../components/cardsList/CardsList';
import Spinner from '../../components/spinner/Spinner';

const MainPage: React.FC = (): JSX.Element => {
  const [error, setError] = React.useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [cardData, setCardData] = React.useState([]);

  React.useEffect(() => {
    try {
      fetch('https://rickandmortyapi.com/api/character')
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
        });
    } catch (error) {
      setIsLoaded(true);
      setError(error as Error);
      console.log((error as Error).message);
    }
  }, []);

  const handleSearch = (value: string) => {
    setIsLoaded(false);
    setError(null);
    fetch(`https://rickandmortyapi.com/api/character/?name=${value}`)
      .then((res) => {
        if (!res.ok) {
          setIsLoaded(true);
          throw Error();
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setIsLoaded(true);
        setCardData(data.results.slice(0, 10));
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
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
