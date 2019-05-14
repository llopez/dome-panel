import React, { useReducer, useEffect, useState } from "react";
import Context from "./context";
import { rootReducer } from "./reducers";
import { Socket } from 'phoenix-socket'

const initialState = {
  items: [],
  page: 0,
  settings: {
    serverUrl: window.localStorage.getItem('serverUrl')
  }
}

const StateProvider = props => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const socket = new Socket(
    'ws://192.168.0.2:4000/socket',
    {params: {token: '1234'}}
  )

  const [channel, setChannel] = useState(null)

  useEffect(() => {
    const channel = socket.channel("room:lobby", {client: 'browser'})

    channel.onMessage = (name, payload) => {
      dispatch({ type: name, payload: payload })
      return payload
    }

    channel.join()
      .receive("ok", response => {
        dispatch({
          type: 'INITIALIZE',
          payload: response
        })
      })
      .receive("error", ({reason}) => console.error('failed to join channel', reason))

    setChannel(channel)

    return () => {
      channel.leave()
    }
  }, [])

  useEffect(() => {
    socket.connect();
  }, [])

  return (
    <Context.Provider value={[state, dispatch, channel]}>
      {props.children}
    </Context.Provider>
  );
};

export default StateProvider;
