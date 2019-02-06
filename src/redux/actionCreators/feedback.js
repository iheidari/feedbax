import feedbackActionTypes from '../../constants/actionTypes/feedback';

export const saveFeedbackAsync = feedbackModel => ({
  type: feedbackActionTypes.SAVE_FEEDBACK_ASYNC,
  feedbackModel
});
