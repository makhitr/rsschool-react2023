import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { ICard } from '../../types';

describe('one Card test', () => {
  const cardData: ICard = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  };
  it('render card', () => {
    render(<Card cardData={cardData} />);
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
  });
  it('render image in a card', () => {
    render(<Card cardData={cardData} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
});
