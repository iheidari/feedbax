import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CustomizedSwitch = props => {
  const { onChange, value, label, ...otherProps } = props;
  const booleanValue = value === undefined ? false : value;
  const onChangeWrapper = (event, checked) => {
    onChange(checked);
  };
  return (
    <FormControlLabel
      control={
        <Switch
          {...otherProps}
          checked={booleanValue}
          onChange={onChangeWrapper}
        />
      }
      label={label}
    />
  );
};

export default CustomizedSwitch;
