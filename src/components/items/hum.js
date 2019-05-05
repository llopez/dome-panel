import React from 'react';
import { ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import HumidityIcon from '../icons/HumidityIcon';

export default ({id, name, state}) => {
  return (
    <ListItem divider>
      <ListItemIcon>
        <HumidityIcon />
      </ListItemIcon>
      <ListItemText primary={name} secondary={state} />
    </ListItem>
  )
}
