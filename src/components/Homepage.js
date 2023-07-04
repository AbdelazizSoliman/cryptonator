import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptoList } from '../redux/cryptoSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const cryptoList = useSelector((state) => state.crypto.cryptoList);
  const status = useSelector((state) => state.crypto.status);
  const error = useSelector((state) => state.crypto.error);

  useEffect(() => {
    dispatch(fetchCryptoList());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="crypto-container">
      <h2>List of available cryptocurrencies:</h2>
      <ul className="crypto-list">
        {cryptoList.map((crypto) => (
          <li className="crypto-item" key={crypto.symbol}>
            <img src={`https://assets.coinlayer.com/icons/${crypto.symbol}.png`} alt={`${crypto.name_full} icon`} />
            <strong>{crypto.name_full}</strong>
            {' '}
            (
            {crypto.symbol}
            )
            <br />
            Max supply:
            {' '}
            {crypto.max_supply}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
