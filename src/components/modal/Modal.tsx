import { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from '../CardsList/CardsList.module.css';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

type ModalProps = {
  onClose: (arg: boolean) => void;
  children: ReactNode;
};

const Modal = ({ onClose, children }: ModalProps) => {
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) elRef.current = document.createElement('div');

  useEffect(() => {
    const el = elRef.current!;
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, []);

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
    elRef.current
  );
};

export default Modal;
