import React from 'react';

const Item = (props) => (
  <li>{props.name} | <button>{props.state}</button></li>
);

export default Item;
