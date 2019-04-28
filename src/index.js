import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { subscribeToItems } from './actions/items';

const itemReducer = (state = [], {type, payload}) => {
  switch (type) {
    case 'INITIALIZE':
      return payload.data;
    case 'ITEM_ADDED':
      return [...state, payload];
    case 'ITEM_REMOVED':
      return state.filter(x => x.id !== payload.id);
    case 'ITEM_UPDATED':
      return state.map(x => x.id === payload.id ? {...x, ...payload} : x)
    default:
     return state;
  }
}
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
  itemReducer, applyMiddleware(thunk),
);

subscribeToItems(store);

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
