import commonActionTypes from '../../constants/actionTypes/common';

export const showDialog = dialogModel => ({
  type: commonActionTypes.SHOW_DIALOG,
  dialogModel
});

export const closeDialog = () => ({
  type: commonActionTypes.CLOSE_DIALOG
});
