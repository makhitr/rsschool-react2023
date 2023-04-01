import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar: React.FC = (): JSX.Element => {
  const [searchValue, setSearchValue] = React.useState(localStorage.getItem('searchValue') || '');

  // React.useEffect(() => setSearchValue(localStorage.getItem('searchValue') || ''), []);
  React.useEffect(() => localStorage.setItem('searchValue', searchValue), [searchValue]);

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
        <button className={styles.searchBarButton}>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
