import React, { useContext } from 'react';
import Context from '../../context/context';
import { ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  ListItemSecondaryAction
} from '@material-ui/core';
import LightBulbIcon from '../icons/LightBulbIcon';

export default ({id, name, state}) => {
  const [_, dispatch] = useContext(Context);

  const changeState = () => {
    const params = {id, name, state: state === 'ON' ? 'OFF' : 'ON'};
    dispatch({type: 'ITEM_UPDATED', payload: params})
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
