import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import Homepage from './components/Homepage';
import CryptoDetails from './components/CryptoDetails';
// import store from './redux/store';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/crypto/:cryptoSymbol" element={<CryptoDetails />} />
        <Route>404 Not Found!</Route>
      </Routes>
    </>
  );
}

export default App;
