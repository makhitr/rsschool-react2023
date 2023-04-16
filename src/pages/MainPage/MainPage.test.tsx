import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';

describe('Main Page', () => {
  it('render main page', async () => {
    render(<MainPage />);
    const mainPageTitle = screen.getByText(/main page/i);
    expect(mainPageTitle).toBeInTheDocument();
  });
});
