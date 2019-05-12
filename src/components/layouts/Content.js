import React, { useContext } from 'react';
import Context from '../../context/context';
import { Grid } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import SettingsPage from '../Settings';
import List from '../../components/List';

const Content = (props) => {
  const [state, dispatch] = useContext(Context);

  return (
    <Grid container style={{marginTop: 64}}>
      <Grid item xs={12}>
        <SwipeableViews
          index={state.page}
          onChangeIndex={(index) => { dispatch({type: 'PAGE_CHANGED', payload: index }) }}>
          <List />
          <SettingsPage />
        </SwipeableViews>
      </Grid>
    </Grid>
  )
}

export default Content;
