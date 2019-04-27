import React from 'react';

const Item = ({id, name, state, onRemove}) => (
  <li>
    {name} | {state} | <button onClick={() => { onRemove(id) }} >X</button>
  </li>
);

export default Item;
