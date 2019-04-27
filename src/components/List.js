import React from 'react';
import ItemContainer from '../containers/ItemContainer';

const List = ({items}) => (
  <ul>
    {
      items.map(x => <ItemContainer key={x.id} {...x} />)
    }
  </ul>
);

export default List;
