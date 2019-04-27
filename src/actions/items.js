const removeItem = (id) => (
  {
    type: 'REMOVE_ITEM',
    payload: {
      id: id
    }
  }
)

export { removeItem };
