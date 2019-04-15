import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const Combobox = props => {
  const { value, onChange, label, items, hasNone, ...remaining } = props;
  let itemsComponent = [];
  if (hasNone)
    itemsComponent.push(
      <MenuItem key={0} value=''>
        <em>None</em>
      </MenuItem>
    );
  itemsComponent.push(
    items.map(item => (
      <MenuItem key={item.key} value={item.key}>
        {item.value}
      </MenuItem>
    ))
  );

  return (
    <FormControl>
      <InputLabel htmlFor='age-simple'>{label}</InputLabel>
      <Select
        value={value || ''}
        onChange={onChange}
        inputProps={{
          name: 'age',
          id: 'age-simple'
        }}
        {...remaining}
      >
        {itemsComponent}
      </Select>
    </FormControl>
  );
};

export default Combobox;
