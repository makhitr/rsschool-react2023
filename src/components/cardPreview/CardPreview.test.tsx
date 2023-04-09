import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardPreview from './CardPreview';
import { ICardPreview } from '../../types';

describe('one CardPreview test', () => {
  const cardData: ICardPreview = {
    id: 1,
    name: 'Rick Sanchez',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  };
  it('render cardPreview', () => {
    render(<CardPreview cardData={cardData} />);
    const card = screen.getByTestId('card-preview');
    expect(card).toBeInTheDocument();
  });
  it('render image in a cardPreview', () => {
    render(<CardPreview cardData={cardData} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
});
