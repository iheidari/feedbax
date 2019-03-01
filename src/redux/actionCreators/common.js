import commonActionTypes from '../../constants/actionTypes/common';

export const showSnackbar = snackbarModel => ({
  type: commonActionTypes.SHOW_SNACKBAR,
  snackbarModel
});

export const closeSnackbar = () => ({
  type: commonActionTypes.CLOSE_SNACKBAR
});

export const showDialog = dialogModel => ({
  type: commonActionTypes.SHOW_DIALOG,
  dialogModel
});

export const closeDialog = () => ({
  type: commonActionTypes.CLOSE_DIALOG
});
