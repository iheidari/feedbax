import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from 'react-i18next';

const Combobox = props => {
  const {
    id,
    name,
    value,
    onChange,
    label,
    items,
    hasNone,
    ...remaining
  } = props;

  const { t } = useTranslation();

  let itemsComponent = [];
  if (hasNone)
    itemsComponent.push(
      <MenuItem key={0} value='_'>
        <em>{t('None')}</em>
      </MenuItem>
    );
  itemsComponent.push(
    items.map(item => (
      <MenuItem key={item.key} value={item.key}>
        {item.text}
      </MenuItem>
    ))
  );
  const selectComponent = (
    <Select
      value={value || '_'}
      onChange={onChange}
      displayEmpty={hasNone}
      inputProps={{
        name: name || id,
        id: id
      }}
      {...remaining}
    >
      {itemsComponent}
    </Select>
  );
  return (
    <FormControl>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      {selectComponent}
    </FormControl>
  );
};

export default Combobox;
