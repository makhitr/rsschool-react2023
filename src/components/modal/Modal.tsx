import React from 'react';
import { createPortal } from 'react-dom';
import styles from '../CardsList/CardsList.module.css';
import { AppDispatch } from 'app/store';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../app/appSlice';

type ModalProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  const dispatch: AppDispatch = useDispatch();

  return createPortal(
    <div
      className={styles.overlay}
      onClick={(event) => {
        if (event.currentTarget === event.target) {
          dispatch(closeModal());
        }
      }}
    >
      {children}
    </div>,
    document.body
  );
};

export default Modal;
