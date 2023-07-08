import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { fetchCryptoList } from '../redux/cryptoSlice';
import Filter from './Filter';

const HomePage = () => {
  const dispatch = useDispatch();
  const cryptoList = useSelector((state) => state.crypto.cryptoList);
  const status = useSelector((state) => state.crypto.status);
  const error = useSelector((state) => state.crypto.error);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    dispatch(fetchCryptoList());
  }, [dispatch]);

  const handleFilterChange = (text) => {
    setFilterText(text);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  const filteredCryptoList = cryptoList.filter((crypto) => crypto.name_full.toLowerCase()
    .includes(filterText.toLowerCase()));

  return (
    <div className="crypto-container">
      <h2>List of available cryptocurrencies:</h2>
      <Filter filterHandler={handleFilterChange} />
      <ul className="crypto-list">
        {filteredCryptoList.map((crypto, index) => (
          <li className={`crypto-item ${index % 2 === 0 ? 'background-1' : 'background-2'}`} key={crypto.symbol}>
            <Link to={`/crypto/${crypto.symbol}`}><IoArrowForwardCircleOutline /></Link>
            <img src={crypto.icon} className="crypo-img" alt={`${crypto.name_full} icon`} />
            <div className="crypto-info">
              <span className="crypto-name">{crypto.name_full}</span>
              <span className="crypto-symbol">{crypto.symbol}</span>
              <span className="crypto-rank">
                Rank:
                {crypto.rank}
              </span>
              <span className="crypto-price">
                Price:
                {crypto.price}
              </span>
              <span className="crypto-price-btc">
                Price in BTC:
                {crypto.price_btc}
              </span>
              <span className="crypto-volume">
                Volume:
                {crypto.volume}
              </span>
              <span className="crypto-market-cap">
                Market Cap:
                {crypto.market_cap}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
