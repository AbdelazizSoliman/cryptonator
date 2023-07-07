import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCryptoList = createAsyncThunk('crypto/fetchCryptoList', async () => {
  const response = await axios.get('http://api.coinlayer.com/list', {
    params: {
      access_key: '0df39f4329d575cc6b8614c2cc460032',
    },
  });
  const cryptoArray = Object.values(response.data.crypto);
  return cryptoArray;
});

// export const fetchCryptobysymbol = createAsyncThunk(
//   'crypto/fetchCryptobysymbol',
//   async (cryptoSymbol) => {
//     const response = await axios.get(`https://api.coinlayer.com/${cryptoSymbol}`, {
//       params: {
//         access_key: '0df39f4329d575cc6b8614c2cc460032',
//       },
//     });
//     return response.data;
//   },
// );

const initialState = {
  cryptoList: [],
  selectedCrypto: null,
  status: 'idle',
  error: null,
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    removeSelectedCrypto: (state) => {
      state.selectedCrypto = null;
    },
  },
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
    // .addCase(fetchCryptobysymbol.pending, (state) => {
    //   state.status = 'loading';
    // })
    // .addCase(fetchCryptobysymbol.fulfilled, (state, action) => {
    //   state.status = 'succeeded';
    //   state.selectedCrypto = action.payload;
    // })
    // .addCase(fetchCryptobysymbol.rejected, (state, action) => {
    //   state.status = 'failed';
    //   state.error = action.error.message;
    // });
  },
});

export const { removeSelectedCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
