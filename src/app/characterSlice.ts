import { createSlice } from '@reduxjs/toolkit';
import { IAppState } from './types';

const initialState: IAppState = {
  characters: [],
  errors: null,
  value: '',
  formData: null,
};

export const characterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setValue } = characterSlice.actions;
export default characterSlice.reducer;
