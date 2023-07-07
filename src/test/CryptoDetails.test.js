import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import store from '../redux/store';
import CryptoDetails from '../components/CryptoDetails';

describe('CryptoDetails component', () => {
  // const mockCryptoList = [
  //   {
  //     symbol: 'BTC',
  //     name: 'Bitcoin',
  //     max_supply: 21000000,
  //   },
  //   {
  //     symbol: 'ETH',
  //     name: 'Ethereum',
  //     max_supply: 100000000,
  //   },
  // ];

  test('matches snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/crypto/BTC']}>
          <Routes>
            <Route path="/crypto/:cryptoSymbol" element={<CryptoDetails />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  // test('displays correct details for selected coin', async () => {
  //   const mockSymbol = 'BTC';

  //   render(
  //     <Provider store={store}>
  //       <MemoryRouter initialEntries={[`/crypto/${mockSymbol}`]}>
  //         <Routes>
  //           <Route path="/crypto/:cryptoSymbol" element={<CryptoDetails />} />
  //         </Routes>
  //       </MemoryRouter>
  //     </Provider>,
  //   );

  //   const coinName = await screen.getByText(mockCryptoList[0].name);
  //   const coinSymbol = screen.getByText(mockCryptoList[0].symbol);
  //   const maxSupply = screen.getByText(`Max supply: ${mockCryptoList[0].max_supply}`);
  //   expect(coinName).toBeInTheDocument();
  //   expect(coinSymbol).toBeInTheDocument();
  //   expect(maxSupply).toBeInTheDocument();
  // });
});
