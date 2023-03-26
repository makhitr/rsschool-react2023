import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import { MemoryRouter } from 'react-router-dom';

describe('render navbar', () => {
  it('render navbar element', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const navBarElement = screen.getByRole('navigation');
    expect(navBarElement).toBeInTheDocument();
  });
  it('test main link', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const mainLink = screen.getByTestId('main-link');
    expect(mainLink).toBeInTheDocument();
  });
  it('test about page link', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const aboutLink = screen.getByTestId('about-link');
    expect(aboutLink).toBeInTheDocument();
  });
  it('test error link', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const errorLink = screen.getByTestId('error-link');
    expect(errorLink).toBeInTheDocument();
  });
});
