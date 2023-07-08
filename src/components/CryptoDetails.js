import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoList } from '../redux/cryptoSlice';

const CryptoDetails = () => {
  const { cryptoSymbol } = useParams();
  const dispatch = useDispatch();
  const cryptoList = useSelector((state) => state.crypto.cryptoList);
  const status = useSelector((state) => state.crypto.status);
  const error = useSelector((state) => state.crypto.error);

  useEffect(() => {
    dispatch(fetchCryptoList());
  }, [dispatch]);
  const selectedCoin = cryptoList.find((crypto) => crypto.symbol === cryptoSymbol);

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
    <div className="">
      <Link className="links" to="/">
        <h2>Back to Home</h2>
      </Link>
      {selectedCoin ? (
        <div className="details-container">
          <li className="crypto-item" key={selectedCoin.symbol}>
            <img src={`https://assets.coinlayer.com/icons/${selectedCoin.symbol}.png`} className="crypo-img" alt={`${selectedCoin.name_full} icon`} />
            {/* {`${selectedCoin.symbol}`}
            <strong>{selectedCoin.name_full}</strong>
            {' '}
            (
            {selectedCoin.symbol}
            )
            <br />
            Max supply:
            {' '}
            {selectedCoin.max_supply} */}
            <h2>{selectedCoin.name_full}</h2>
            <span className="crypto-details-symbol">{selectedCoin.symbol}</span>
            <span className="crypto-details-rank">
              Rank:
              {selectedCoin.rank}
            </span>
            <span className="crypto-details-price">
              Price:
              {selectedCoin.price}
            </span>
            <span className="crypto-details-price-btc">
              Price in BTC:
              {selectedCoin.price_btc}
            </span>
            <span className="crypto-details-volume">
              Volume:
              {selectedCoin.volume}
            </span>
            <span className="crypto-details-market-cap">
              Market Cap:
              {selectedCoin.market_cap}
            </span>
            <span className="crypto-details-available-supply">
              Available Supply:
              {selectedCoin.available_supply}
            </span>
            <span className="crypto-details-total-supply">
              Total Supply:
              {selectedCoin.total_supply}
            </span>
            <span className="crypto-details-price-change-1h">
              Price change in 1 hour:
              {selectedCoin.price_change_percentage_1h}
            </span>
            <span className="crypto-details-price-change-24h">
              Price change in 24 hours:
              {selectedCoin.price_change_percentage_24h}
            </span>
            <span className="crypto-details-price-change-7d">
              Price change in 7 days:
              {selectedCoin.price_change_percentage_7d}
            </span>
          </li>
        </div>
      ) : (
        <div>Product not found.</div>
      )}
    </div>
  );
};

export default CryptoDetails;
