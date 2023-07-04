import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCryptoList = createAsyncThunk('crypto/fetchCryptoList', async () => {
  const response = await axios.get('http://api.coinlayer.com/api/list', {
    params: {
      access_key: '0df39f4329d575cc6b8614c2cc460032',
    },
  });
  const cryptoArray = Object.values(response.data.crypto);
  return cryptoArray;
});

const initialState = {
  cryptoList: [],
  status: 'idle',
  error: null,
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCryptoList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cryptoList = action.payload;
      })
      .addCase(fetchCryptoList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default cryptoSlice.reducer;
