import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('Search Bar', () => {
  it('render search bar', () => {
    render(<SearchBar />);
      // expect(true).toBe(true)
  });
  // test("render search button", () => {

  // })
});
