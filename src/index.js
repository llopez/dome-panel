import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = [
  {id: 1, name: 'Item 1', state: 'off'},
  {id: 2, name: 'Item 2', state: 'off'},
  {id: 3, name: 'Item 3', state: 'off'},
]

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    default:
     return state;
  }
}

const store = createStore(itemReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
