import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [cryptoList, setCryptoList] = useState([]);

  useEffect(() => {
    const fetchCryptoList = async () => {
      try {
        const response = await axios.get('http://api.coinlayer.com/api/list', {
          params: {
            access_key: '0df39f4329d575cc6b8614c2cc460032',
          },
        });
        const cryptoArray = Object.values(response.data.crypto);
        setCryptoList(cryptoArray);
      } catch (error) {
        // console.error('Error fetching crypto list: ', error);
      }
    };

    fetchCryptoList();
  }, []);

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
