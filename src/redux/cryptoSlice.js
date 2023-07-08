import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCryptoList = createAsyncThunk('crypto/fetchCryptoList', async () => {
  const response = await axios.get('https://api.coinstats.app/public/v1/coins');
  const cryptoArray = response.data.coins.map((coin) => ({
    icon: coin.icon,
    name_full: coin.name,
    symbol: coin.symbol,
    rank: coin.rank,
    price: coin.price,
    price_btc: coin.priceBtc,
    volume: coin.volume,
    market_cap: coin.marketCap,
    available_supply: coin.availableSupply,
    total_supply: coin.totalSupply,
    price_change_percentage_1h: coin.priceChange1h,
    price_change_percentage_1d: coin.priceChange1d,
    price_change_percentage_1w: coin.priceChange1w,
  }));
  return cryptoArray;
});

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
  },
});

export const { removeSelectedCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
