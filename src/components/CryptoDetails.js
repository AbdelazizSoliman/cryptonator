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
            {`${selectedCoin.symbol}`}
            <strong>{selectedCoin.name_full}</strong>
            {' '}
            (
            {selectedCoin.symbol}
            )
            <br />
            Max supply:
            {' '}
            {selectedCoin.max_supply}
          </li>
        </div>
      ) : (
        <div>Product not found.</div>
      )}
    </div>
  );
};

export default CryptoDetails;
