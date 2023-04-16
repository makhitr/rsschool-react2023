import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from '../utils/utils-for-tests';

describe('Test App', () => {
  it('full app rendering/navigating', async () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const mainLink = screen.getByTestId('main-link');
    const aboutLink = screen.getByTestId('about-link');
    const formLink = screen.getByTestId('form-link');
    await userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
    await userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    await userEvent.click(formLink);
    expect(screen.getByTestId('form-page')).toBeInTheDocument();
  });
  it('landing on a bad page', () => {
    const badRoute = '/some/bad/route';
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });
});
