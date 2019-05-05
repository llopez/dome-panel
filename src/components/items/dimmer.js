import React from 'react';
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
  return (
    <ListItem divider>
      <ListItemIcon>
        <LightBulbIcon />
      </ListItemIcon>
      <ListItemText primary={name} secondary={state} />
      <ListItemSecondaryAction style={{width: 53}}>
        <IconButton><AddIcon fontSize="small"/></IconButton>
        <IconButton><RemoveIcon fontSize="small"/></IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
