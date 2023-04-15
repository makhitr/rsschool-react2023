import { ICard } from 'types';
import { store } from './store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface IAppState {
  entities: ICard[];
  error: null | string;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  value: null | string;
  formData: null | [];
}
