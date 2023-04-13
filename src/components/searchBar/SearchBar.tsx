import React from 'react';
import styles from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
import { setValue } from '../../app/characterSlice';
import { ISearch, SearchBarProps } from '../../types';
import { useForm, SubmitHandler } from 'react-hook-form';

const SearchBar: React.FC<SearchBarProps> = ({ search }): JSX.Element => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<ISearch>({ mode: 'all' });

  const onSubmit: SubmitHandler<ISearch> = (data) => {
    const { searchValue } = data;
    dispatch(setValue(searchValue));
  };

  return (
    <div className={styles.searchBarWrapper}>
      <form className={styles.searchBarForm} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('searchValue', {
            required: 'Should not be empty',
          })}
          placeholder="Search..."
          className={styles.searchBarInput}
        />
        <button className={styles.searchBarButton}>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
