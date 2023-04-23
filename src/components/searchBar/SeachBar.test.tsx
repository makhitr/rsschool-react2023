import { describe, it, expect, vi, Mock } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import { renderWithProviders } from '../../utils/utils-for-tests';
import { useAppDispatch } from '../../app/hooks';

vi.mock('../../app/hooks');

describe('Search Bar', () => {
  it('render search bar input', () => {
    renderWithProviders(<SearchBar />);
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  });
  it('submit', async () => {
    const mockDispatch = vi.fn();
    (useAppDispatch as Mock).mockReturnValue(mockDispatch);
    renderWithProviders(<SearchBar />);
    fireEvent.submit(screen.getByRole('search'));
    expect(mockDispatch).toHaveBeenCalled();
  });
});
