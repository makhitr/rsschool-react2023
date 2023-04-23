import { it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import CardModal from './CardModal';
import { renderWithProviders } from '../../utils/utils-for-tests';

describe('CardsModal', () => {
  it('render modal', () => {
    renderWithProviders(<CardModal />);
    const cardModal = screen.getByTestId('card-modal');
    expect(cardModal).toBeInTheDocument();
  });
});
