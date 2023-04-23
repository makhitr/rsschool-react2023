import React from 'react';
import styles from './SearchBar.module.css';
import { setValue } from '../../app/appSlice';
import { useAppDispatch } from '../../app/hooks';
import { AppDispatch } from '../../app/store';

const SearchBar: React.FC = (): JSX.Element => {
  const dispatch: AppDispatch = useAppDispatch();
  const [localValue, setLocalValue] = React.useState('');

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(setValue(localValue));
  };

  return (
    <div className={styles.searchBarWrapper}>
      <form onSubmit={onSubmit} role="search">
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchBarInput}
          onChange={(e) => setLocalValue(e.target.value)}
        />
        <button type="submit" className={styles.searchBarButton} data-testid="search-btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
