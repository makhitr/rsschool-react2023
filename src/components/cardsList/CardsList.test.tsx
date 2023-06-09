import { it, expect, vi, Mock } from 'vitest';
import { screen } from '@testing-library/react';
import CardsList from './CardsList';
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
    created: '2017-11-04T18:48:46.250Z',
  },
  {
    id: 2,
    name: 'Rick Sanchez',
    status: true,
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    created: '2017-11-04T18:48:46.250Z',
  },
];
vi.mock('../../app/hooks');

describe('CardsList', () => {
  it('render cards list', () => {
    renderWithProviders(<CardsList />);
    const cardsList = screen.getByTestId('cards-list');
    expect(cardsList).toBeInTheDocument();
  });
  it('show with data', () => {
    (useAppSelector as Mock).mockReturnValue(cards);
    renderWithProviders(<CardsList />);
    expect(screen.getAllByTestId('card-preview')).toHaveLength(2);
  });
});
