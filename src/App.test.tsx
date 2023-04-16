import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from './utils/utils-for-tests';

describe('App', () => {
  it('render App', () => {
    renderWithProviders(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const app = screen.getByTestId(/app/i);
    expect(app).toBeInTheDocument();
  });
});
