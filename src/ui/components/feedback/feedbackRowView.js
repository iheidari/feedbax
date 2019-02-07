import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const FeedbackRowView = props => {
  return (
    <Grid container onClick={props.onSelect}>
      <Grid item lg='3'>
        {props.title}
      </Grid>
      <Grid item lg='7'>
        {props.description}
      </Grid>
      <Grid item lg='2' onClick={props.onDelete}>
        Delete
      </Grid>
    </Grid>
  );
};

FeedbackRowView.propTypes = {
  title: PropTypes.string
};

export default FeedbackRowView;
