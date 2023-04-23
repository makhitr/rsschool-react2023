import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import MainPage from './MainPage';
import { renderWithProviders } from '../../utils/utils-for-tests';

describe('Main Page', () => {
  it('render main page', async () => {
    renderWithProviders(<MainPage />);
    const mainPageTitle = screen.getByText(/main page/i);
    expect(mainPageTitle).toBeInTheDocument();
  });
});
