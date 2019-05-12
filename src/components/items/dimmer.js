import React, { useContext } from 'react';
import Context from '../../context/context';
import { ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core';
import LightBulbIcon from '../icons/LightBulbIcon';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

export default ({id, name, state}) => {
  const [_, dispatch] = useContext(Context);

  return (
    <ListItem divider>
      <ListItemIcon>
        <LightBulbIcon />
      </ListItemIcon>
      <ListItemText primary={name} secondary={state} />
      <ListItemSecondaryAction style={{width: 53}}>
        <IconButton
          disabled={ state >= 100 }
          onClick={() => dispatch({
            type: 'ITEM_UPDATED',
            payload: {id: id, state: state + 5}
          })}>
          <AddIcon fontSize="small"/>
        </IconButton>
        <IconButton
          disabled={ state === 0 }
          onClick={() => { dispatch({
            type: 'ITEM_UPDATED',
            payload: {id: id, state: state - 5}})
          }}><RemoveIcon fontSize="small"/></IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
