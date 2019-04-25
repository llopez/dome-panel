import React from 'react';
import Item from './Item';

const List = (props) => (
  <ul>
    {
      props.items.map(x => <Item key={x.id} name={x.name} state={x.state}/>)
    }
  </ul>
);

export default List;
