import React, { FormEvent } from 'react';
import styles from './SearchBar.module.css';
class SearchBar extends React.Component {
  state = {
    searchValue: localStorage.getItem('searchValue') || '',
  };

  // componentDidMount() {
  //   this.setState({ searchValue: localStorage.getItem('searchValue') || '' });
  // }

  componentWillUnmount(): void {
    localStorage.setItem('searchValue', this.state.searchValue);
  }

  setValue = (event: FormEvent) => {
    const { value } = event.target as HTMLInputElement;
    this.setState({ searchValue: value });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    localStorage.setItem('searchValue', this.state.searchValue);
  };

  render() {
    return (
      <div className={styles.searchBarWrapper}>
        <form className={styles.searchBarForm} onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchBarInput}
            onChange={this.setValue}
            value={this.state.searchValue}
          />
          <button className={styles.searchBarButton}>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
