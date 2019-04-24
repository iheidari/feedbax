import React from 'react';
import TextField from '@material-ui/core/TextField';

const CustomizedTextField = props => {
  const notValid = props.validation && props.validation.length > 0;
  return (
    <TextField
      {...props}
      error={notValid}
      helperText={notValid && props.validation}
    />
  );
};
export default CustomizedTextField;
