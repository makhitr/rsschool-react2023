import { ICard, IFormCardModified } from 'types';

export interface IAppState {
  entities: ICard[];
  error: null | string;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  cardLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
  value: null | string;
  selectedCard: null | ICard;
  selectedCardId: null | number;
  formData: IFormCardModified[];
  isOpen: boolean;
}
