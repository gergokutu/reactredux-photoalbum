import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Provider} from 'react-redux'
import store from './store.js';

function App() {
  // render method not needed from reader...
  // because it's not a class
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </Provider>
  );
}

export default App;
