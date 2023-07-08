// import React, { useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCryptoList } from '../redux/cryptoSlice';

// const CryptoDetails = () => {
//   const { cryptoSymbol } = useParams();
//   const dispatch = useDispatch();
//   const cryptoList = useSelector((state) => state.crypto.cryptoList);
//   const status = useSelector((state) => state.crypto.status);
//   const error = useSelector((state) => state.crypto.error);

//   useEffect(() => {
//     dispatch(fetchCryptoList());
//   }, [dispatch]);
//   const selectedCoin = cryptoList.find((crypto) => crypto.symbol === cryptoSymbol);

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (status === 'failed') {
//     return (
//       <div>
//         Error:
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div className="crypto-details-container">
//       <Link className="links" to="/">
//         <h2>Back to Home</h2>
//       </Link>
//       {selectedCoin ? (
//         <div className="details-container">
//           <li className="crypto-details-header" key={selectedCoin.symbol}>
//             <img src={`https://assets.coinlayer.com/icons/${selectedCoin.symbol}.png`} className="crypto-details-img" alt={`${selectedCoin.name_full} icon`} />
//             <h2>{selectedCoin.name_full}</h2>
//             <span className="crypto-details-symbol">{selectedCoin.symbol}</span>
//             <span className="crypto-details-rank">
//               Rank:
//               {selectedCoin.rank}
//             </span>
//             <span className="crypto-details-price">
//               Price:
//               {selectedCoin.price}
//             </span>
//             <span className="crypto-details-price-btc">
//               Price in BTC:
//               {selectedCoin.price_btc}
//             </span>
//             <span className="crypto-details-volume">
//               Volume:
//               {selectedCoin.volume}
//             </span>
//             <span className="crypto-details-market-cap">
//               Market Cap:
//               {selectedCoin.market_cap}
//             </span>
//             <span className="crypto-details-available-supply">
//               Available Supply:
//               {selectedCoin.available_supply}
//             </span>
//             <span className="crypto-details-total-supply">
//               Total Supply:
//               {selectedCoin.total_supply}
//             </span>
//             <span className="crypto-details-price-change-1h">
//               Price change in 1 hour:
//               {selectedCoin.price_change_percentage_1h}
//             </span>
//             <span className="crypto-details-price-change-24h">
//               Price change in 24 hours:
//               {selectedCoin.price_change_percentage_24h}
//             </span>
//             <span className="crypto-details-price-change-7d">
//               Price change in 7 days:
//               {selectedCoin.price_change_percentage_7d}
//             </span>
//           </li>
//         </div>
//       ) : (
//         <div>Product not found.</div>
//       )}
//     </div>
//   );
// };

// export default CryptoDetails;

// import React, { useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCryptoList } from '../redux/cryptoSlice';

// const CryptoDetails = () => {
//   const { cryptoSymbol } = useParams();
//   const dispatch = useDispatch();
//   const cryptoList = useSelector((state) => state.crypto.cryptoList);
//   const status = useSelector((state) => state.crypto.status);
//   const error = useSelector((state) => state.crypto.error);

//   useEffect(() => {
//     dispatch(fetchCryptoList());
//   }, [dispatch]);
//   const selectedCoin = cryptoList.find((crypto) => crypto.symbol === cryptoSymbol);

//   if (status === 'loading') {
//     return <div className="loading">Loading...</div>;
//   }

//   if (status === 'failed') {
//     return (
//       <div className="error">
//         Error:
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div className="crypto-details-container">
//       <Link className="back-link" to="/">
//         <h2>Back to Home</h2>
//       </Link>
//       {selectedCoin ? (
//         <div className="details-container">
//           <li className="crypto-details" key={selectedCoin.symbol}>
//             <img src={`https://assets.coinlayer.com/icons/${selectedCoin.symbol}.png`} className="cryptodetailes-img" alt={`${selectedCoin.name_full} icon`} />
//             <div className="crypto-info">
//               <h2>{selectedCoin.name_full}</h2>
//               <p className="crypto-symbol">{selectedCoin.symbol}</p>
//               <p className="crypto-rank">
//                 Rank:
//                 {selectedCoin.rank}
//               </p>
//               <p className="crypto-price">
//                 Price:
//                 {selectedCoin.price}
//               </p>
//               <p className="crypto-price-btc">
//                 Price in BTC:
//                 {selectedCoin.price_btc}
//               </p>
//               <p className="crypto-volume">
//                 Volume:
//                 {selectedCoin.volume}
//               </p>
//               <p className="crypto-market-cap">
//                 Market Cap:
//                 {selectedCoin.market_cap}
//               </p>
//               <p className="crypto-available-supply">
//                 Available Supply:
//                 {selectedCoin.available_supply}
//               </p>
//               <p className="crypto-total-supply">
//                 Total Supply:
//                 {selectedCoin.total_supply}
//               </p>
//               <p className="crypto-price-change-1h">
//                 Price change in 1 hour:
//                 {selectedCoin.price_change_percentage_1h}
//                 %
//               </p>
//               <p className="crypto-price-change-24h">
//                 Price change in 24 hours:
//                 {selectedCoin.price_change_percentage_24h}
//                 %
//               </p>
//               <p className="crypto-price-change-7d">
//                 Price change in 7 days:
//                 {selectedCoin.price_change_percentage_7d}
//                 %
//               </p>
//             </div>
//           </li>
//         </div>
//       ) : (
//         <div className="not-found">Product not found.</div>
//       )}
//     </div>
//   );
// };

// export default CryptoDetails;

// import React, { useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCryptoList } from '../redux/cryptoSlice';

// const CryptoDetails = () => {
//   const { cryptoSymbol } = useParams();
//   const dispatch = useDispatch();
//   const cryptoList = useSelector((state) => state.crypto.cryptoList);
//   const status = useSelector((state) => state.crypto.status);
//   const error = useSelector((state) => state.crypto.error);

//   useEffect(() => {
//     dispatch(fetchCryptoList());
//   }, [dispatch]);

//   const selectedCoin = cryptoList.find((crypto) => crypto.symbol === cryptoSymbol);

//   if (status === 'loading') {
//     return <div className="loading">Loading...</div>;
//   }

//   if (status === 'failed') {
//     return (
//       <div className="error">
//         Error:
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div className="crypto-details-container">
//       <Link className="back-link" to="/">
//         <h2>Back to Home</h2>
//       </Link>
//       {selectedCoin ? (
//         <div className="details-container">
//           <table className="crypto-details">
//             <tbody>
//               <tr>
//                 <td>
//                   <img src={`https://assets.coinlayer.com/icons/${selectedCoin.symbol}.png`} className="cryptodetails-img" alt={`${selectedCoin.name_full} icon`} />
//                 </td>
//                 <td>
//                   <div className="crypto-info">
//                     <h2>{selectedCoin.name_full}</h2>
//                     <p className="crypto-symbol">{selectedCoin.symbol}</p>
//                     <p className="crypto-rank">
//                       Rank:
//                       {selectedCoin.rank}
//                     </p>
//                     <p className="crypto-price">
//                       Price:
//                       {selectedCoin.price}
//                     </p>
//                     <p className="crypto-price-btc">
//                       Price in BTC:
//                       {selectedCoin.price_btc}
//                     </p>
//                     <p className="crypto-volume">
//                       Volume:
//                       {selectedCoin.volume}
//                     </p>
//                     <p className="crypto-market-cap">
//                       Market Cap:
//                       {selectedCoin.market_cap}
//                     </p>
//                     <p className="crypto-available-supply">
//                       Available Supply:
//                       {selectedCoin.available_supply}
//                     </p>
//                     <p className="crypto-total-supply">
//                       Total Supply:
//                       {selectedCoin.total_supply}
//                     </p>
//                     <p className="crypto-price-change-1h">
//                       Price change in 1 hour:
//                       {selectedCoin.price_change_percentage_1h}
//                       %
//                     </p>
//                     <p className="crypto-price-change-24h">
//                       Price change in 24 hours:
//                       {selectedCoin.price_change_percentage_24h}
//                       %
//                     </p>
//                     <p className="crypto-price-change-7d">
//                       Price change in 7 days:
//                       {selectedCoin.price_change_percentage_7d}
//                       %
//                     </p>
//                   </div>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <div className="not-found">Product not found.</div>
//       )}
//     </div>
//   );
// };

// export default CryptoDetails;

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
          <table className="crypto-details">
            <tbody>
              <tr>
                <td>
                  <img src={`https://assets.coinlayer.com/icons/${selectedCoin.symbol}.png`} className="cryptodetails-img" alt={`${selectedCoin.name_full} icon`} />
                </td>
                <td>
                  <div className="crypto-info">
                    <div>
                      <h2>{selectedCoin.name_full}</h2>
                    </div>
                    <div>
                      <p className="crypto-symbol">{selectedCoin.symbol}</p>
                    </div>
                    <div>
                      <p className="crypto-rank">
                        Rank:
                        {selectedCoin.rank}
                      </p>
                    </div>
                    <div>
                      <p className="crypto-price">
                        Price:
                        {selectedCoin.price}
                      </p>
                    </div>
                    <div>
                      <p className="crypto-price-btc">
                        Price in BTC:
                        {selectedCoin.price_btc}
                      </p>
                    </div>
                    <div>
                      <p className="crypto-volume">
                        Volume:
                        {selectedCoin.volume}
                      </p>
                    </div>
                    <div>
                      <p className="crypto-market-cap">
                        Market Cap:
                        {selectedCoin.market_cap}
                      </p>
                    </div>
                    <div>
                      <p className="crypto-available-supply">
                        Available Supply:
                        {selectedCoin.available_supply}
                      </p>
                    </div>
                    <div>
                      <p className="crypto-total-supply">
                        Total Supply:
                        {selectedCoin.total_supply}
                      </p>
                    </div>
                    <div>
                      <p className="crypto-price-change-1h">
                        Price change in 1 hour:
                        {selectedCoin.price_change_percentage_1h}
                        %
                      </p>
                    </div>
                    <div>
                      <p className="crypto-price-change-24h">
                        Price change in 24 hours:
                        {selectedCoin.price_change_percentage_24h}
                        %
                      </p>
                    </div>
                    <div>
                      <p className="crypto-price-change-7d">
                        Price change in 7 days:
                        {selectedCoin.price_change_percentage_7d}
                        %
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="not-found">Product not found.</div>
      )}
    </div>
  );
};

export default CryptoDetails;
