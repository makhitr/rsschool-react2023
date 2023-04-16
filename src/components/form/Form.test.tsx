import { it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';
import { renderWithProviders } from '../../utils/utils-for-tests';

describe('Form', () => {
  const onSubmit = vi.fn();

  beforeEach(() => {
    onSubmit.mockClear();
    renderWithProviders(<Form />);
  });
  it('render form', () => {
    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
  });
  it('onSubmit is called after pass validation', () => {
    const name = screen.getByRole('textbox', {
      name: /name/i,
    });
    expect(name).toBeInTheDocument();
    userEvent.type(name, 'John');
    const date = screen.getByLabelText(/created:/i);
    expect(date).toBeInTheDocument();
    fireEvent.change(date, { target: { value: '12/05/2020' } });
  });
});
