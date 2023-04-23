import { it, expect } from 'vitest';
import Modal from './Modal';
import { renderWithProviders } from '../../utils/utils-for-tests';

describe('Modal test', () => {
  it('modal shows the children', () => {
    const { getByText } = renderWithProviders(
      <Modal>
        <div>My Modal</div>
      </Modal>
    );
    expect(getByText('My Modal')).toBeInTheDocument();
  });
  it('should be unmounted', () => {
    const { getByText, unmount, queryByText } = renderWithProviders(
      <Modal>
        <div>My Modal</div>
      </Modal>
    );
    expect(getByText('My Modal')).toBeInTheDocument();
    unmount();
    expect(queryByText('My Modal')).not.toBeInTheDocument();
  });
});
