import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';

describe('Main Page', () => {
  it('render main page', () => {
    render(<MainPage />);
    const mainPageTitle = screen.getByText(/main page/i);
    expect(mainPageTitle).toBeInTheDocument();
  });
  it('render list cards', () => {
    render(<MainPage />);
    const list = screen.getByTestId('cards-list');
    expect(list).toBeInTheDocument();
    screen.debug();
    // const items = screen.getAllByTestId('card-preview');
    // expect(items.length).toBe(10);
  });
});
