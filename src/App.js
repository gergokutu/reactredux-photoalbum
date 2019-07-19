import React from 'react';
import './App.css';

import { Provider } from 'react-redux'
import store from './store.js';
import AlbumsListContainer from './components/AlbumsListContainer';

function App() {
  // render method not needed from reader...
  // because it's not a class
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <AlbumsListContainer />
        </header>
      </div>
    </Provider>
  );
}

export default App;
