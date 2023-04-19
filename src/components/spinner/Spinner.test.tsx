import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import Spinner from './Spinner';
import { renderWithProviders } from '../../utils/utils-for-tests';

describe('Search Bar', () => {
  it('render search bar input', () => {
    renderWithProviders(<Spinner />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
});
