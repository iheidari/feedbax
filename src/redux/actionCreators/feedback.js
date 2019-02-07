import feedbackActionTypes from '../../constants/actionTypes/feedback';

export const loadFeedbacksAsync = (page, take) => ({
  type: feedbackActionTypes.LOAD_FEEDBACKS_ASYNC,
  page,
  take
});

export const deleteFeedbackAsync = feedbackId => ({
  type: feedbackActionTypes.DELETE_FEEDBACK_ASYNC,
  feedbackId
});

export const modelChanged = value => ({
  type: feedbackActionTypes.MODEL_CHANGED,
  value
});

export const loadFeedbackAsync = (feedbackId, feedbacks) => ({
  type: feedbackActionTypes.LOAD_FEEDBACK_ASYNC,
  feedbackId,
  feedbacks
});

export const saveFeedbackAsync = feedbackModel => ({
  type: feedbackActionTypes.SAVE_FEEDBACK_ASYNC,
  feedbackModel
});
