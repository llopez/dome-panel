import React, { useContext } from 'react';
import Context from '../../context/context';
import { withStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  },
};

const Footer = (props) => {
  const [state, dispatch] = useContext(Context);

  return (
    <Tabs
      value={state.page}
      indicatorColor="primary"
      textColor="primary"
      variant="fullWidth"
      onChange={(e, value) => { dispatch({type: 'PAGE_CHANGED', payload: value}) }}
    >
      <Tab icon={<HomeIcon />} />
      <Tab icon={<SettingsIcon />} />
    </Tabs>
  )
}

export default withStyles(styles)(Footer);
