import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from '../CardsList/CardsList.module.css';

type ModalProps = {
  onClose: (arg: boolean) => void;
  children: ReactNode;
};

const Modal = ({ onClose, children }: ModalProps) => {
  return createPortal(
    <div
      className={styles.overlay}
      onClick={(event) => {
        if (event.currentTarget === event.target) {
          onClose(false);
        }
      }}
    >
      {children}
    </div>,
    document.body
  );
};

export default Modal;
