import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';

describe('Form Page', () => {
  it('render form page', () => {
    render(<FormPage />);
    const formPage = screen.getByTestId('form-page');
    expect(formPage).toBeInTheDocument();
  });
  it('render list cards', () => {
    render(<FormPage />);
    const list = screen.getByTestId('cards-list');
    expect(list).toBeInTheDocument();
  });
});
