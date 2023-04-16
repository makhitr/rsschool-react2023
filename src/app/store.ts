import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import modalReducer from './modalSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    modal: modalReducer,
  },
});
