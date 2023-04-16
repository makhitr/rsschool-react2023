import { createSlice } from '@reduxjs/toolkit';
import { getCards, getCardData } from './thunks';
import { IAppState } from './types';

const initialState: IAppState = {
  entities: [],
  error: null,
  loading: 'idle',
  cardLoading: 'idle',
  value: null,
  selectedCard: null,
  selectedCardId: null,
  formData: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setValue(state, action) {
      state.value = action.payload;
    },
    setSelectedCardId(state, action) {
      state.selectedCardId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCards.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(getCards.rejected, (state) => {
        state.loading = 'failed';
        state.error = 'No information is available for a page';
      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.entities = action.payload;
      })
      .addCase(getCardData.pending, (state) => {
        state.cardLoading = 'pending';
        state.error = null;
      })
      .addCase(getCardData.rejected, (state) => {
        state.cardLoading = 'failed';
        state.error = 'No information is available for a page';
      })
      .addCase(getCardData.fulfilled, (state, action) => {
        state.cardLoading = 'succeeded';
        state.selectedCard = action.payload;
      });
  },
});

export const { setValue, setSelectedCardId } = appSlice.actions;
export default appSlice.reducer;