import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';

it('render about page', () => {
  render(<ErrorPage />);
  const errorPageTitle = screen.getByText(/error page/i);
  expect(errorPageTitle).toBeInTheDocument();
});
