import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CustomizedCheckbox = props => {
  const { onChange, value, label, ...otherProps } = props;
  const booleanValue = value === undefined ? false : value;
  const onChangeWrapper = (event, checked) => {
    onChange(checked);
  };
  return (
    <FormControlLabel
      control={
        <Checkbox
          {...otherProps}
          checked={booleanValue}
          onChange={onChangeWrapper}
        />
      }
      label={label}
    />
  );
};

export default CustomizedCheckbox;
