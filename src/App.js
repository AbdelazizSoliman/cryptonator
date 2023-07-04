import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';

import './App.css';

const App = () => (
  <div className="App">
    <Router>
      <Homepage />
      <Routes />
    </Router>
  </div>
);

export default App;
