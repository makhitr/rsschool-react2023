import { describe, it, expect, vi, Mock } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import FullCard from './FullCard';

global.fetch = vi.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve({
        id: 2,
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth',
          url: 'https://rickandmortyapi.com/api/location/1',
        },
        location: {
          name: 'Earth',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/2',
          // ...
        ],
        url: 'https://rickandmortyapi.com/api/character/2',
        created: '2017-11-04T18:50:21.651Z',
      });
    },
  });
}) as Mock;
describe('one Card test', () => {
  it('render card', async () => {
    await act(async () => {
      render(<FullCard id={1} />);
    });
    // render(<FullCard id={1} />);
    const card = screen.getByTestId('full-card');
    expect(card).toBeInTheDocument();
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
});
