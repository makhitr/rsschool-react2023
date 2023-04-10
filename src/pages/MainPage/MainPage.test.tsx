import { describe, it, expect, vi, Mock } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import MainPage from './MainPage';

global.fetch = vi.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve([
        {
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
          ],
          url: 'https://rickandmortyapi.com/api/character/2',
          created: '2017-11-04T18:50:21.651Z',
        },
        {
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
            name: 'Earth (Replacement Dimension)',
            url: 'https://rickandmortyapi.com/api/location/20',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          episode: [
            'https://rickandmortyapi.com/api/episode/1',
            'https://rickandmortyapi.com/api/episode/2',
            // ...
          ],
          url: 'https://rickandmortyapi.com/api/character/1',
          created: '2017-11-04T18:48:46.250Z',
        },
        {
          id: 183,
          name: 'Johnny Depp',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: {
            name: 'Earth (C-500A)',
            url: 'https://rickandmortyapi.com/api/location/23',
          },
          location: {
            name: 'Earth (C-500A)',
            url: 'https://rickandmortyapi.com/api/location/23',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/183.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/8'],
          url: 'https://rickandmortyapi.com/api/character/183',
          created: '2017-12-29T18:51:29.693Z',
        },
      ]);
    },
  });
}) as Mock;

describe('Main Page', () => {
  it('render main page', async () => {
    await act(async () => {
      render(<MainPage />);
    });
    const mainPageTitle = screen.getByText(/main page/i);
    expect(mainPageTitle).toBeInTheDocument();
  });
});
