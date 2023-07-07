import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCryptobysymbol,
  removeSelectedCrypto,
} from '../redux/cryptoSlice';

const CryptoDetails = () => {
  const { cryptoSymbol } = useParams();
  const dispatch = useDispatch();
  const crypto = useSelector((state) => state.crypto.selectedCrypto);
  const status = useSelector((state) => state.crypto.status);
  const error = useSelector((state) => state.crypto.error);

  React.useEffect(() => {
    dispatch(fetchCryptobysymbol(cryptoSymbol));

    return () => {
      dispatch(removeSelectedCrypto());
    };
  }, [cryptoSymbol, dispatch]);

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
      {crypto ? (
        <div className="details-container">
          <li className="crypto-item" key={crypto.symbol}>
            <img src={`https://assets.coinlayer.com/icons/${cryptoSymbol}.png`} className="crypo-img" alt={`${crypto.name_full} icon`} />
            {`${cryptoSymbol}`}
            {/* <strong>{crypto.name_full}</strong>
            {' '}
            (
            {crypto.symbol}
            )
            <br />
            Max supply:
            {' '}
            {crypto.max_supply} */}
          </li>
        </div>
      ) : (
        <div>Product not found.</div>
      )}
    </div>
  );
};

export default CryptoDetails;
