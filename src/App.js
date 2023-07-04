import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Homepage from './components/Homepage';
import store from './redux/store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Router>
        <Homepage />
      </Router>
    </div>
  </Provider>
);

export default App;
