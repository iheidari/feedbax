import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '../basic/TextField';
import DatePicker from '../basic/DatePicker';
import Checkbox from '../basic/Checkbox';

const Form = ({ data, onModelChange }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <TextField
          label='Title'
          margin='normal'
          variant='outlined'
          value={data.title}
          onChange={onModelChange('title')}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label='Description'
          margin='normal'
          variant='outlined'
          value={data.description}
          multiline
          onChange={onModelChange('description')}
        />
      </Grid>
      <Grid item xs={12}>
        <DatePicker
          label='Date'
          margin='normal'
          variant='outlined'
          value={data.date}
          onChange={onModelChange('date')}
        />
      </Grid>
      <Grid item sx={12}>
        <Checkbox
          label='General'
          value={data.isPublic}
          onChange={onModelChange('isPublic')}
        />
      </Grid>
    </Grid>
  );
};

Form.propTypes = {
  data: PropTypes.object,
  onModelChange: PropTypes.func
};

export default Form;
