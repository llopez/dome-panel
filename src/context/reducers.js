export const REMOVE_ITEM = "REMOVE_ITEM";

export const itemsReducer = (state, {type, payload}) => {
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

export const pageReducer = (state, {type, payload}) => {
  switch (type) {
    case 'PAGE_CHANGED':
      return payload;
    default:
     return state;
  }
}

export const settingsReducer = (state, {type, payload}) => {
  switch (type) {
    case 'SERVER_URL_CHANGED':
      return {...state, serverUrl: payload };
    default:
     return state;
  }
}

export const combineReducers = reducer => {
  return (state = {}, action) => {
    const keys = Object.keys(reducer);
    const nextReducers = {};
    for (let i = 0; i < keys.length; i++) {
      const invoke = reducer[keys[i]](state[keys[i]], action);
      nextReducers[keys[i]] = invoke;
    }
    return nextReducers;
  };
};

export const rootReducer = combineReducers({
  items: itemsReducer,
  page: pageReducer,
  settings: settingsReducer,
})
