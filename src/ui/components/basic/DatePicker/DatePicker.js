import React from 'react';
import TextField from '@material-ui/core/TextField';
import format from '../../../../util/format';

const DatePicker = props => {
  let { value } = props;
  if (value) value = format(value, 'date-format', 'YYYY-MM-DD');
  //TODO: Warning here... if I change it to '' after the control lost the focus label will come over it
  else value = ' ';
  const onChange = event => {
    const value = event.target.value;
    if (value) {
      const finalValue = stringToLocalDate(value);
      return props.onChange(finalValue);
    } else return props.onChange('');
  };
  return <TextField {...props} type='date' value={value} onChange={onChange} />;
};

const stringToLocalDate = stringDate => {
  const [year, month, date] = stringDate.split('-');
  return new Date(year, month - 1, date);
};

export default DatePicker;
