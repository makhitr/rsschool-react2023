import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCards = createAsyncThunk('fetch-cards', async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data.results.slice(0, 10);
});

export const getCardData = createAsyncThunk('fetch-card', async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
});
