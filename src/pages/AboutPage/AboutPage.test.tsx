import { it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import AboutPage from './AboutPage';
import { renderWithProviders } from '../../utils/utils-for-tests';

it('render about page', () => {
  renderWithProviders(<AboutPage />);
  const aboutPageTitle = screen.getByText(/about us page/i);
  expect(aboutPageTitle).toBeInTheDocument();
});
