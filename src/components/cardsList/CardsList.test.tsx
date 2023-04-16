import { it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import CardsList from './CardsList';
import { renderWithProviders } from '../../utils/utils-for-tests';
describe('CardsList', () => {
  it('render cards list', () => {
    renderWithProviders(<CardsList />);
    const cardsList = screen.getByTestId('cards-list');
    // const allCards = screen.getAllByTestId('card-preview');
    expect(cardsList).toBeInTheDocument();
    // expect(allCards.length).toBe(2);
  });
});
