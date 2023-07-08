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
    return <div className="loading">Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div className="error">
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="crypto-details-container">
      <Link className="back-link" to="/">
        <h2>Back to Home</h2>
      </Link>
      {selectedCoin ? (
        <div className="details-container">
          <img src={`https://assets.coinlayer.com/icons/${selectedCoin.symbol}.png`} className="cryptodetails-img" alt={`${selectedCoin.name_full} icon`} />
          <div className="crypto-details">
            <div className="crypto-info">
              <h2>{selectedCoin.name_full}</h2>
              <p className="crypto-symbol">{selectedCoin.symbol}</p>
            </div>
            <table>
              <tbody>
                <tr>
                  <td>Rank:</td>
                  <td>{selectedCoin.rank}</td>
                </tr>
                <tr>
                  <td>Price:</td>
                  <td>{selectedCoin.price}</td>
                </tr>
                <tr>
                  <td>Price in BTC:</td>
                  <td>{selectedCoin.price_btc}</td>
                </tr>
                <tr>
                  <td>Volume:</td>
                  <td>{selectedCoin.volume}</td>
                </tr>
                <tr>
                  <td>Market Cap:</td>
                  <td>{selectedCoin.market_cap}</td>
                </tr>
                <tr>
                  <td>Available Supply:</td>
                  <td>{selectedCoin.available_supply}</td>
                </tr>
                <tr>
                  <td>Total Supply:</td>
                  <td>{selectedCoin.total_supply}</td>
                </tr>
                <tr>
                  <td>Price change in 1 hour:</td>
                  <td>
                    {selectedCoin.price_change_percentage_1h}
                    {' '}
                    %
                  </td>
                </tr>
                <tr>
                  <td>Price change in 24 hours:</td>
                  <td>
                    {selectedCoin.price_change_percentage_1d}
                    {' '}
                    %
                  </td>
                </tr>
                <tr>
                  <td>Price change in 7 days:</td>
                  <td>
                    {selectedCoin.price_change_percentage_1w}
                    {' '}
                    %
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="not-found">Product not found.</div>
      )}
    </div>
  );
};

export default CryptoDetails;
