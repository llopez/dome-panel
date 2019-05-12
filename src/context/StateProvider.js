import React, { useReducer } from "react";
import Context from "./context";
import { rootReducer } from "./reducers";

const initialState = {
  items: [
    {id: 1, name: 'Studio Light', type: 'switch', state: 'OFF'},
    {id: 2, name: 'Living Light', type: 'dimm', state: 70},
    {id: 3, name: 'Backyard Light', type: 'switch', state: 'OFF'},
    {id: 4, name: 'Studio Temp', type: 'temp', state: '30°C'},
    {id: 5, name: 'Studio Humidity', type: 'hum', state: '70%'},
    {id: 6, name: 'Air Conditioner', type: 'air', state: 'OFF'},
  ],
  page: 0
}

const StateProvider = props => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
};

export default StateProvider;
