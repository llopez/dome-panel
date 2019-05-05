import React from 'react';
import { ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  ListItemSecondaryAction
} from '@material-ui/core';
import LightBulbIcon from '../icons/LightBulbIcon';

// onRemove(id)

export default ({id, name, state, onRemove, onUpdate}) => {
  const changeState = () => {
    const params = {id, name, state: state === 'ON' ? 'OFF' : 'ON'};
    onUpdate(params)
  }

  return (
    <ListItem divider>
      <ListItemIcon>
        <LightBulbIcon />
      </ListItemIcon>
      <ListItemText primary={name} secondary={state} />
      <ListItemSecondaryAction>
        <Switch onChange={changeState}/>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
