import React from 'react';
import { ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  ListItemSecondaryAction
} from '@material-ui/core';
import AirConIcon from '../icons/AirConIcon';

export default ({id, name, state, type, onUpdate}) => {
  const changeState = () => {
    const params = {id, name, state: state === 'ON' ? 'OFF' : 'ON'};
    onUpdate(params)
  }

  return (
    <ListItem divider>
      <ListItemIcon>
        <AirConIcon />
      </ListItemIcon>
      <ListItemText primary={name} secondary={state} />
      <ListItemSecondaryAction>
        <Switch onChange={changeState}/>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
