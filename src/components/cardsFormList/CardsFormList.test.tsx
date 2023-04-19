import { it, expect, vi, Mock } from 'vitest';
import { screen } from '@testing-library/react';
import CardsFormList from './CardsFormList';
import { renderWithProviders } from '../../utils/utils-for-tests';
import { useAppSelector } from '../../app/hooks';

const cards = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: true,
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    id: 2,
    name: 'Rick Sanchez',
    status: true,
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
];
vi.mock('../../app/hooks');

describe('CardsList', () => {
  it('render cards list', () => {
    renderWithProviders(<CardsFormList />);
    const cardsList = screen.getByTestId('cardsForm-list');
    expect(cardsList).toBeInTheDocument();
  });
  it('show with data', () => {
    (useAppSelector as Mock).mockReturnValue(cards);
    renderWithProviders(<CardsFormList />);
    expect(screen.getAllByTestId('card')).toHaveLength(2);
  });
});
