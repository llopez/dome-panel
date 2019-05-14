import React, { useContext, useEffect } from 'react';
import Context from '../context/context';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const SettingsPage = (props) => {
  const [state, dispatch] = useContext(Context);

  return(
    <form noValidate autoComplete="off">
      <TextField
        id="url"
        label="Server Address"
        margin="normal"
        fullWidth
        value={state.settings.serverUrl}
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
}

export default SettingsPage;
