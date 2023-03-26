import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('render App', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const app = screen.getByTestId(/app/i);
    expect(app).toBeInTheDocument();
  });
});
