import React, { useContext } from 'react';
import Context from '../../context/context';
import { ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  ListItemSecondaryAction
} from '@material-ui/core';
import AirConIcon from '../icons/AirConIcon';

export default ({id, name, state, type, onUpdate}) => {
  const [_, dispatch, channel] = useContext(Context);

  const changeState = () => {
    const params = {id, name, state: state === 'ON' ? 'OFF' : 'ON'};
    channel.push('update:item', params)
  }

  return (
    <ListItem divider>
      <ListItemIcon>
        <AirConIcon />
      </ListItemIcon>
      <ListItemText primary={name} secondary={state} />
      <ListItemSecondaryAction>
        <Switch onChange={changeState} checked={state === 'ON' ? true : false}/>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
