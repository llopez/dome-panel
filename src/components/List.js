import React, { useContext } from 'react';
import Context from '../context/context';
import Item from '../components/Item';
import { List as MUIList } from '@material-ui/core';

const maxHeight = () => (
  (window.innerHeight - 130) + 'px'
)

const List = () => {
  const [state, dispatch] = useContext(Context);

  return (
    <MUIList style={{overflow: 'auto', maxHeight: maxHeight()}}>
      {
        state.items.map(x => <Item key={x.id} {...x} />)
      }
    </MUIList>
  )
}

export default List;
