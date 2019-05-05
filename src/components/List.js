import React from 'react';
import ItemContainer from '../containers/ItemContainer';
import { List } from '@material-ui/core';

const maxHeight = () => (
  (window.innerHeight - 130) + 'px'
)

export default ({items}) => (
  <List style={{overflow: 'auto', maxHeight: maxHeight()}}>
    {
      items.map(x => <ItemContainer key={x.id} {...x} />)
    }
  </List>
);
