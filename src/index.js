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

const itemReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'ADD_ITEM':
      return [...state, payload];
    case 'REMOVE_ITEM':
      return state.filter(x => x.id !== payload.id);
    case 'UPDATE_ITEM':
      return state.map(x => x.id === payload.id ? {...x, ...payload} : x)
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
