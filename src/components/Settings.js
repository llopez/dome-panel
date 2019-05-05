import React from 'react';
import TextField from '@material-ui/core/TextField';

export default (props) => (
  <form noValidate autoComplete="off">
    <TextField
      id="url"
      label="Server Address"
      margin="normal"
      fullWidth
    />
    <TextField
      id="option-1"
      label="Option 1"
      margin="normal"
      fullWidth
    />
    <TextField
      id="option-2"
      label="Option 2"
      margin="normal"
      fullWidth
    />
    <TextField
      id="option-3"
      label="Option 3"
      margin="normal"
      fullWidth
    />
  </form>
)
