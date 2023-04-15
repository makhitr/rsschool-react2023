import { createSlice } from '@reduxjs/toolkit';
import { getCards } from './thunks';
import { IAppState } from './types';

const initialState: IAppState = {
  entities: [],
  error: null,
  loading: 'idle',
  value: null,
  formData: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setValue(state, action) {
      state.value = action.payload;
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
      });
  },
});

export const { setValue } = appSlice.actions;
export default appSlice.reducer;
