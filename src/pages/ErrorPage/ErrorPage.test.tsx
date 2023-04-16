import { it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';
import { renderWithProviders } from '../../utils/utils-for-tests';

it('render about page', () => {
  renderWithProviders(<ErrorPage />);
  const errorPageTitle = screen.getByText(/error page/i);
  expect(errorPageTitle).toBeInTheDocument();
});
