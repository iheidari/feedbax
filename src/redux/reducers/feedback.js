import actionTypes from '../../constants/actionTypes/feedback';

const feedback = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_FEEDBACK: {
      const savedFeedback = action.savedFeedback;
      const feedbacks = [...state, savedFeedback];
      return feedbacks;
    }
    case actionTypes.UPDATE_FEEDBACK: {
      const savedFeedback = action.savedFeedback;
      const feedbacks = state.map(feedback => {
        if (feedback.id === savedFeedback.id) {
          return savedFeedback;
        } else {
          return feedback;
        }
      });
      return feedbacks;
    }
    default:
      return state;
  }
};

export default feedback;
