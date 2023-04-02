import { it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Form from './Form';
it('render form', () => {
  const createCard = vi.fn();
  render(<Form createCard={createCard} />);
  const formPageTitle = screen.getByTestId(/form/i);
  expect(formPageTitle).toBeInTheDocument();
});
