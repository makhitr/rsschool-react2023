import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';

describe('Form Page', () => {
  it('render form page', () => {
    render(<FormPage />);
    const formPageTitle = screen.getByText(/character/i);
    expect(formPageTitle).toBeInTheDocument();
  });
  it('render list cards', () => {
    render(<FormPage />);
    const list = screen.getByTestId('cards-list');
    expect(list).toBeInTheDocument();
  });
});
