import React from 'react';

const Item = ({id, name, state, onRemove, onUpdate}) => (
  <li>
    {name} | <button onClick={() => {
      const params = {id, name, state: state === 'on' ? 'off' : 'on'};
      onUpdate(params)
    }} >{state}</button> | <button onClick={() => {
      onRemove(id) }
    } >X</button>
  </li>
);

export default Item;
