import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardsList from './CardsList';

describe('CardsList', () => {
  it('render cards list', () => {
    const cards = [
      {
        name: 'Test',
        created: 'Test',
        status: true,
        species: 'Test',
        gender: 'Test',
        image: 'Test',
      },
      {
        name: 'Test1',
        created: 'Test1',
        status: false,
        species: 'Test1',
        gender: 'Test1',
        image: 'Test1',
      },
    ];
    render(<CardsList cards={cards} />);
    const cardsList = screen.getByTestId('cards-list');
    const allCards = screen.getAllByTestId('card');
    expect(cardsList).toBeInTheDocument();
    expect(allCards.length).toBe(2);
  });
});
