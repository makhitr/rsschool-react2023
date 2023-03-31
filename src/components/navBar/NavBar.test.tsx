import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';

describe('render navbar', () => {
  it('render navbar element', () => {
    render(<NavBar />, { wrapper: BrowserRouter });
    const navBarElement = screen.getByRole('navigation');
    expect(navBarElement).toBeInTheDocument();
  });
  it('test main link', () => {
    render(<NavBar />, { wrapper: BrowserRouter });
    const mainLink = screen.getByTestId('main-link');
    expect(mainLink).toBeInTheDocument();
  });
  it('test about page link', () => {
    render(<NavBar />, { wrapper: BrowserRouter });
    const aboutLink = screen.getByTestId('about-link');
    expect(aboutLink).toBeInTheDocument();
  });
  it('test form link', () => {
    render(<NavBar />, { wrapper: BrowserRouter });
    const formLink = screen.getByTestId('form-link');
    expect(formLink).toBeInTheDocument();
  });
});
