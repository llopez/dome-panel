import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

const TempIcon = (props) => (
  <IconButton aria-label="Temp">
    <SvgIcon fontSize={props.fontSize !== undefined ? props.fontSize : 'large' }>
      <path fill="#000000" d="M17,17A5,5 0 0,1 12,22A5,5 0 0,1 7,17C7,15.36 7.79,13.91 9,13V5A3,3 0 0,1 12,2A3,3 0 0,1 15,5V13C16.21,13.91 17,15.36 17,17M11,8V14.17C9.83,14.58 9,15.69 9,17A3,3 0 0,0 12,20A3,3 0 0,0 15,17C15,15.69 14.17,14.58 13,14.17V8H11Z" />
    </SvgIcon>
  </IconButton>
)

export default TempIcon;
