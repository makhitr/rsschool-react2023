import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardsList from './CardsList';

describe('CardsList', () => {
  it('render cards list', () => {
    const cards = [
      {
        id: 1,
        name: 'string',
        status: 'string',
        species: 'string',
        type: 'string',
        gender: 'string',
        origin: {
          name: 'string',
          url: 'string',
        },
        location: {
          name: 'string',
          url: 'string',
        },
        image: 'string',
        episode: ['string'],
        url: 'string',
        created: 'string',
      },
      {
        id: 2,
        name: 'string',
        status: 'string',
        species: 'string',
        type: 'string',
        gender: 'string',
        origin: {
          name: 'string',
          url: 'string',
        },
        location: {
          name: 'string',
          url: 'string',
        },
        image: 'string',
        episode: ['string'],
        url: 'string',
        created: 'string',
      },
    ];
    render(<CardsList cards={cards} />);
    const cardsList = screen.getByTestId('cards-list');
    const allCards = screen.getAllByTestId('card');
    expect(cardsList).toBeInTheDocument();
    expect(allCards.length).toBe(2);
  });
});
