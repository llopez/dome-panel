import React from 'react';
import { ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import TempIcon from '../icons/TempIcon';

export default ({id, name, state}) => {
  return (
    <ListItem divider>
      <ListItemIcon>
        <TempIcon />
      </ListItemIcon>
      <ListItemText primary={name} secondary={state} />
    </ListItem>
  )
}
