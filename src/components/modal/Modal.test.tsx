import { it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import Modal from './Modal';

describe('Modal test', () => {
  it('modal shows the children', () => {
    const setShowModal = vi.fn();
    const { getByText } = render(
      <Modal onClose={setShowModal}>
        <div>My Modal</div>
      </Modal>
    );
    expect(getByText('My Modal')).toBeInTheDocument();
  });
  it('should be unmounted', () => {
    const setShowModal = vi.fn();
    const { getByText, unmount, queryByText } = render(
      <Modal onClose={setShowModal}>
        <div>My Modal</div>
      </Modal>
    );
    expect(getByText('My Modal')).toBeInTheDocument();
    unmount();
    expect(queryByText('My Modal')).not.toBeInTheDocument();
  });
});
