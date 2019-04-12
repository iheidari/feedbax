import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const CustomizedCheckbox = props => {
  const { onChange, value, ...otherProps } = props;
  const booleanValue = value === undefined ? false : value;
  const onChangeWrapper = (event, checked) => {
    onChange(checked);
  };
  return (
    <Checkbox
      {...otherProps}
      checked={booleanValue}
      onChange={onChangeWrapper}
    />
  );
};

export default CustomizedCheckbox;
