import React from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import CardsList from '../../components/cardsList/CardsList';
import Spinner from '../../components/spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getCards } from '../../app/thunks';
import { AppDispatch, RootState } from 'app/store';

const MainPage: React.FC = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.app.loading);
  const error = useSelector((state: RootState) => state.app.error);
  const value = useSelector((state: RootState) => state.app.value);

  React.useEffect(() => {
    const url = value
      ? `https://rickandmortyapi.com/api/character/?name=${value}`
      : 'https://rickandmortyapi.com/api/character';
    dispatch(getCards(url));
  }, [dispatch, value]);

  return (
    <div data-testid="main-page">
      <header>
        <h2>Main Page</h2>
      </header>
      <SearchBar />
      {error ? (
        <p>No information is available for a page</p>
      ) : loading === 'pending' ? (
        <Spinner />
      ) : (
        <CardsList />
      )}
    </div>
  );
};

export default MainPage;
