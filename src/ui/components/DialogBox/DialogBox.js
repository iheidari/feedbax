import React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';

const DialogBox = ({ title, children, actions, ...other }) => {
  let actionButtons = [];
  if (actions)
    actionButtons = actions.map(action => (
      <Button key={action.text} {...action}>
        {action.text}
      </Button>
    ));
  return (
    <Dialog {...other}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{children}</DialogContentText>
        <DialogActions>{actionButtons}</DialogActions>
      </DialogContent>
    </Dialog>
  );
};

DialogBox.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.object)
};
export default DialogBox;
