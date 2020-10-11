import React from 'react';
import logo from './logo.svg';
import ButtonClick from './ButtonClick.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <ButtonClick />
        
      </header>
    </div>
  );
}

export default App;
