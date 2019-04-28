import { Socket } from 'phoenix-socket';
let socket = new Socket("ws://localhost:4000/socket", {params: {token: window.userToken}})
socket.connect()
let channel = socket.channel("room:lobby", {})

const itemAdded = (payload) => ({
  type: 'ITEM_ADDED',
  payload: payload
})

const itemRemoved = (payload) => ({
  type: 'ITEM_REMOVED',
  payload: payload
})

const itemUpdated = (payload) => ({
  type: 'ITEM_UPDATED',
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
    store.dispatch(itemAdded(payload))
  })

  channel.on("ITEM_REMOVED", payload => {
    store.dispatch(itemRemoved(payload))
  })

  channel.on("ITEM_UPDATED", payload => {
    store.dispatch(itemUpdated(payload))
  })
}

const removeAsync = (id) => {
  return dispatch => {
    channel.push("delete:item", {id: id})
  }
}

const updateItem = (item) => {
  return dispatch => {
    channel.push("update:item", item)
  }
}

export { removeAsync, subscribeToItems, updateItem };
