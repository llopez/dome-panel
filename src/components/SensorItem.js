import React from 'react';

const SensorItem = ({id, name, state, onRemove}) => (
  <li>
    {name} | {state} | <button onClick={() => {onRemove(id) }} >X</button>
  </li>
);

export default SensorItem;
