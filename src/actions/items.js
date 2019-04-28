import { Socket } from 'phoenix-socket';
let socket = new Socket("ws://localhost:4000/socket", {params: {token: window.userToken}})
socket.connect()
let channel = socket.channel("room:lobby", {})

const addItem = (payload) => ({
  type: 'ADD_ITEM',
  payload: payload
})

const removeItem = (payload) => ({
  type: 'REMOVE_ITEM',
  payload: payload
})

const updateItem = (payload) => ({
  type: 'UPDATE_ITEM',
  payload: payload
})

const subscribeToItems = (store) => {
  channel.join().receive("ok", response => {
    console.log("Joined successfully", response)

    store.dispatch({
      type: 'INITIALIZE',
      payload: response
    })
  })

  channel.on("ITEM_ADDED", payload => {
    store.dispatch(addItem(payload))
  })

  channel.on("ITEM_REMOVED", payload => {
    store.dispatch(removeItem(payload))
  })

  channel.on("ITEM_UPDATED", payload => {
    store.dispatch(updateItem(payload))
  })
}

const removeAsync = (id) => {
  return dispatch => {
    channel.push("delete:item", {id: id})
  }
}

export { removeAsync, subscribeToItems };
