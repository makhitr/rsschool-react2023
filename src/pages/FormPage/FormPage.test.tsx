import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import FormPage from './FormPage';
import { renderWithProviders } from '../../utils/utils-for-tests';

describe('Form Page', () => {
  it('render form page', () => {
    renderWithProviders(<FormPage />);
    const formPage = screen.getByTestId('form-page');
    expect(formPage).toBeInTheDocument();
  });
  it('render list cards', () => {
    renderWithProviders(<FormPage />);
    const list = screen.getByTestId('cardsForm-list');
    expect(list).toBeInTheDocument();
  });
});
