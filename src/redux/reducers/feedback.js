import actionTypes from '../../constants/actionTypes/feedback';

const feedback = (
  state = {
    list: [],
    current: { title: '', description: '' },
    page: 1,
    take: 5
  },
  action
) => {
  switch (action.type) {
    case actionTypes.LOAD_FEEDBACKS: {
      return { ...state, list: action.feedbacks, ...action.queryStringObjects };
    }
    case actionTypes.DELETE_FEEDBACK: {
      return { ...state, list: action.feedbacks };
    }
    case actionTypes.MODEL_CHANGED: {
      return { ...state, current: action.feedback };
    }
    case actionTypes.LOAD_FEEDBACK: {
      return { ...state, current: action.feedback };
    }
    case actionTypes.ADD_FEEDBACK: {
      return { ...state, list: action.feedbacks };
    }
    case actionTypes.UPDATE_FEEDBACK: {
      return { ...state, list: action.feedbacks };
    }
    default:
      return state;
  }
};

export default feedback;
