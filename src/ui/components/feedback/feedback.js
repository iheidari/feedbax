import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const Feedback = props => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <TextField
          id='title'
          label='Title'
          margin='normal'
          variant='outlined'
          value={props.model.title}
          onChange={props.fieledChanged('title')}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id='description'
          label='Description'
          variant='outlined'
          multiline
          value={props.model.description}
          onChange={props.fieledChanged('description')}
        />
      </Grid>
    </Grid>
  );
};

Feedback.propTypes = {
  title: PropTypes.string,
  fieledChanged: PropTypes.func.isRequired
};

export default Feedback;
