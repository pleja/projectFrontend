import React from 'react';
import AxioCall from './components/backCall.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Coin Market Cap Top 100!!</div>
        <AxioCall />
      </header>
    </div>
  );
}

export default App;
