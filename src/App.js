import React, { Component } from 'react';
import Tickers from './components/Tickers.js';
import Searchbar from './components/Searchbar.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Crypto-Ticker</h2>
            <Searchbar />

      </div>
          <Tickers />
      </div>
    );
  }
}

export default App;
