import actionTypes from '../../constants/actionTypes/common';

const common = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SHOW_SNACKBAR:
      return { ...state, snackbar: { open: true, ...action.snackbarModel } };

    case actionTypes.CLOSE_SNACKBAR:
      return { ...state, snackbar: { ...state.snackbar, open: false } };

    case actionTypes.SHOW_DIALOG:
      return { ...state, dialog: { open: true, ...action.dialogModel } };

    case actionTypes.CLOSE_DIALOG:
      return { ...state, dialog: { ...state.dialog, open: false } };
    default:
      return state;
  }
};

export default common;
