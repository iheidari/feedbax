import actionTypes from '../../constants/actionTypes/feedback';

const feedback = (
  state = { list: [], current: { title: '', description: '' } },
  action
) => {
  switch (action.type) {
    case actionTypes.MODEL_CHANGED: {
      return {
        ...state,
        current: { ...state.current, ...action.value }
      };
    }
    case actionTypes.LOAD_FEEDBACK: {
      return { ...state, current: action.feedback };
    }
    case actionTypes.ADD_FEEDBACK: {
      const savedFeedback = action.savedFeedback;
      const feedbacks = [...state.list, savedFeedback];
      return { ...state, list: feedbacks };
    }
    case actionTypes.UPDATE_FEEDBACK: {
      const savedFeedback = action.savedFeedback;
      const feedbacks = state.list.map(feedback => {
        if (feedback.id === savedFeedback.id) {
          return savedFeedback;
        } else {
          return feedback;
        }
      });
      return { ...state, list: feedbacks };
    }
    default:
      return state;
  }
};

export default feedback;
