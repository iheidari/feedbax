import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';
import TextField from '../basic/TextField';
import DatePicker from '../basic/DatePicker';
import Switch from '../basic/Switch';
import Combobox from '../basic/Combobox';
import List from '../basic/List';

const Form = ({ data, validation, onModelChange }) => {
  const { t } = useTranslation();
  return (
    <Grid container>
      <Grid item xs={12}>
        <TextField
          label={t('Title')}
          margin='normal'
          variant='outlined'
          validation={validation.title}
          value={data.title}
          onChange={onModelChange('title')}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label={t('Description')}
          margin='normal'
          variant='outlined'
          value={data.description}
          multiline
          onChange={onModelChange('description')}
        />
      </Grid>
      <Grid item xs={12}>
        <DatePicker
          label={t('Date')}
          margin='normal'
          variant='outlined'
          value={data.date}
          onChange={onModelChange('date')}
        />
      </Grid>
      <Grid item xs={12}>
        <Switch
          label={t('General')}
          value={data.isPublic}
          onChange={onModelChange('isPublic')}
        />
      </Grid>
      <Grid item xs={12}>
        <Combobox
          id='category'
          label='Category'
          value={data.category}
          hasNone
          items={[{ key: 1, text: 'one' }, { key: 2, text: 'two' }]}
          onChange={onModelChange('category')}
        />
      </Grid>
      <Grid item xs={12}>
        <List items={[{ key: 1, text: 'one' }, { key: 2, text: 'two' }]} />
      </Grid>
      <Grid item xs={12}>
        <List
          isComplex
          items={[
            {
              key: 1,
              text: 'Primary',
              items: [{ key: 1, text: 'One' }, { key: 2, text: 'Two' }]
            },
            {
              key: 2,
              text: 'Secondary',
              items: [
                { key: 3, text: 'Three' },
                { key: 4, text: 'Four' },
                { key: 5, text: 'Five' }
              ]
            }
          ]}
        />
      </Grid>
    </Grid>
  );
};

Form.propTypes = {
  data: PropTypes.object.isRequired,
  validation: PropTypes.object.isRequired,
  onModelChange: PropTypes.func
};

export default Form;
