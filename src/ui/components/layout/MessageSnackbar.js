import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';

const MessageSnackbar = props => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      open={props.open}
      autoHideDuration={props.autoHideDuration}
      onClose={props.onClose}
      ContentProps={{
        'aria-describedby': 'message-id'
      }}
      message={<span id='message-id'>{props.children}</span>}
    />
  );
};

MessageSnackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  autoHideDuration: PropTypes.number,
  onClose: PropTypes.func,
  children: PropTypes.string.isRequired
};

MessageSnackbar.defaultProps = {
  autoHideDuration: 5000
};

export default MessageSnackbar;
