import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

it('render about page', () => {
  render(<AboutPage />);
  const aboutPageTitle = screen.getByText(/about us page/i);
  expect(aboutPageTitle).toBeInTheDocument();
});
