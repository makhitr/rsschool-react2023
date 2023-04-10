import React from 'react';
import styles from './SearchBar.module.css';
import { SearchBarProps } from '../../types';

const SearchBar: React.FC<SearchBarProps> = ({ search }): JSX.Element => {
  const [searchValue, setSearchValue] = React.useState(localStorage.getItem('searchValue') || '');

  React.useEffect(() => {
    return () => localStorage.setItem('searchValue', searchValue);
  }, [searchValue]);

  const setValue = (event: React.FormEvent) => {
    const { value } = event.target as HTMLInputElement;
    setSearchValue(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className={styles.searchBarWrapper}>
      <form className={styles.searchBarForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchBarInput}
          onChange={setValue}
          value={searchValue}
        />
        <button className={styles.searchBarButton} onClick={() => search(searchValue)}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
