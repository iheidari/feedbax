import actionTypes from '../../constants/actionTypes/feedback';

const feedback = (
  state = {
    current: { title: '', description: '' },
    page: 1,
    take: 5,
    saved: false,
    saveMessage: ''
  },
  action
) => {
  switch (action.type) {
    case actionTypes.LOAD_FEEDBACKS: {
      return {
        ...state,
        list: action.feedbacks,
        count: action.count,
        ...action.queryStringObjects
      };
    }
    case actionTypes.DELETE_FEEDBACK: {
      return state;
    }
    case actionTypes.MODEL_CHANGED: {
      return { ...state, current: action.feedback };
    }
    case actionTypes.LOAD_FEEDBACK: {
      return { ...state, current: action.feedback };
    }
    case actionTypes.ADD_FEEDBACK: {
      return {
        ...state,
        current: { title: '', description: '' },
        saved: true,
        saveMessage: 'Feedback added successfully'
      };
    }
    case actionTypes.UPDATE_FEEDBACK: {
      return {
        ...state,
        current: action.savedFeedback,
        saved: true,
        saveMessage: 'Feedback updated successfully'
      };
    }
    case actionTypes.CLOSE_SNACKBAR:
      return { ...state, saved: false, saveMessage: '' };
    default:
      return state;
  }
};

export default feedback;
