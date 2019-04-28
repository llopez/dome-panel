import React from 'react';
import ItemContainer from '../containers/ItemContainer';
import SensorContainer from '../containers/SensorContainer';

const List = ({items}) => (
  <ul>
    {
      items.filter( x => x.type === 'sensor').map(x => <SensorContainer key={x.id} {...x} />)
    }
    {
      items.filter( x => x.type === 'switch').map(x => <ItemContainer key={x.id} {...x} />)
    }
  </ul>
);

export default List;
