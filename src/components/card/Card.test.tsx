import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { IFormCardModified } from '../../types';

describe('one Card test', () => {
  const cardData: IFormCardModified = {
    id: 1,
    name: 'Rick Sanchez',
    status: true,
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
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
