import actionTypes from '../../constants/actionTypes/common';

const common = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SHOW_DIALOG:
      return { ...state, dialog: action.dialogModel };

    case actionTypes.CLOSE_DIALOG:
      return { ...state, dialog: { ...state.dialog, open: false } };
    default:
      return state;
  }
};

export default common;
