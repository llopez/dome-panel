import React from 'react';
import { Grid } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import SettingsPage from '../Settings';
import ListContainer from '../../containers/ListContainer';

export default (props) => {
  return (
    <Grid container style={{marginTop: 64}}>
      <Grid item xs={12}>
        <SwipeableViews index={props.index} onChangeIndex={props.onSwipe}>
          <ListContainer />
          <SettingsPage />
        </SwipeableViews>
      </Grid>
    </Grid>
  )
}
