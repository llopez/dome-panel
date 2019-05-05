import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { subscribeToItems } from './actions/items';

const initialState = [
  {id: 1, name: 'Studio Light', type: 'switch', state: 'OFF'},
  {id: 2, name: 'Living Light', type: 'dimm', state: '70%'},
  {id: 3, name: 'Backyard Light', type: 'switch', state: 'OFF'},
  {id: 4, name: 'Studio Temp', type: 'temp', state: '30°C'},
  {id: 5, name: 'Studio Humidity', type: 'hum', state: '70%'},
  {id: 6, name: 'Air Conditioner', type: 'air', state: 'OFF'},
]

const pageReducer = (state = 0, {type, payload}) => {
  switch (type) {
    case 'PAGE_CHANGED':
      return payload;
    default:
     return state;
  }
}

const itemReducer = (state = initialState, {type, payload}) => {
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

const rootReducer = combineReducers({items: itemReducer, page: pageReducer})

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
  rootReducer, applyMiddleware(thunk),
);

// simulate temp sensor
setInterval(() => {
  let value = Math.round(Math.random() * 2 + 20)
  store.dispatch({type: 'ITEM_UPDATED', payload: {id: 4, state: value + "°C"}})
}, 3000)

// simulate humidity sensor
setInterval(() => {
  let value = Math.round(Math.random() * 2 + 50)
  store.dispatch({type: 'ITEM_UPDATED', payload: {id: 5, state: value + "%"}})
}, 3000)

//subscribeToItems(store);

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
