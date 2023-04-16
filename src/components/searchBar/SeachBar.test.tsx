import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import { renderWithProviders } from '../../utils/utils-for-tests';

describe('Search Bar', () => {
  it('render search bar input', () => {
    renderWithProviders(<SearchBar />);
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  });
});
