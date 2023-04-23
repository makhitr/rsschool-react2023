import { vi } from 'vitest';
import { getCards } from './thunks';

global.fetch = vi.fn();

describe('getCardsThunk', () => {
  it('fetch Cards', async () => {
    const dispatch = vi.fn();
    const thunk = getCards('https://rickandmortyapi.com/api/character');

    await thunk(dispatch, () => {}, undefined);
    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);
    const [start, end] = calls;
    expect(start[0].type).toBe('fetch-cards/pending');
    expect(end[0].type).toBe('fetch-cards/rejected');
  });
});
