import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardsList from './CardsList';

describe('CardsList', () => {
  it('render cards list', () => {
    const cards = [
      {
        id: 1,
        name: 'string',
        gender: 'string',
        image: 'string',
      },
      {
        id: 2,
        name: 'string',
        gender: 'string',
        image: 'string',
      },
    ];
    render(<CardsList cards={cards} />);
    const cardsList = screen.getByTestId('cards-list');
    const allCards = screen.getAllByTestId('card-preview');
    expect(cardsList).toBeInTheDocument();
    expect(allCards.length).toBe(2);
  });
});
