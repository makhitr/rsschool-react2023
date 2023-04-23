import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import FullCard from './FullCard';
import { renderWithProviders } from '../../utils/utils-for-tests';

describe('one Card test', () => {
  it('render card', () => {
    renderWithProviders(<FullCard />);
    const card = screen.getByTestId('full-card');
    expect(card).toBeInTheDocument();
  });
});
