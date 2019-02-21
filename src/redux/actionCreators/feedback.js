import feedbackActionTypes from '../../constants/actionTypes/feedback';

export const loadFeedbacksAsync = (page = 1, take = 5, sort, order) => ({
  type: feedbackActionTypes.LOAD_FEEDBACKS_ASYNC,
  page,
  take,
  sort,
  order
});

export const loadFeedbacks = (feedbacks, queryStringObjects) => ({
  type: feedbackActionTypes.LOAD_FEEDBACKS,
  feedbacks,
  queryStringObjects
});

export const deleteFeedbackAsync = (feedbackId, loadingProps) => ({
  type: feedbackActionTypes.DELETE_FEEDBACK_ASYNC,
  feedbackId,
  loadingProps
});

export const deleteFeedback = deletedFeedback => {
  return {
    type: feedbackActionTypes.DELETE_FEEDBACK,
    deletedFeedback
  };
};

export const modelChanged = (feedback, value) => ({
  type: feedbackActionTypes.MODEL_CHANGED,
  feedback: { ...feedback, ...value }
});

export const loadFeedbackAsync = feedbackId => ({
  type: feedbackActionTypes.LOAD_FEEDBACK_ASYNC,
  feedbackId
});

export const loadFeedback = feedback => ({
  type: feedbackActionTypes.LOAD_FEEDBACK,
  feedback
});

export const saveFeedbackAsync = feedback => ({
  type: feedbackActionTypes.SAVE_FEEDBACK_ASYNC,
  feedback
});

export const addFeedback = savedFeedback => ({
  type: feedbackActionTypes.ADD_FEEDBACK,
  savedFeedback
});

export const updateFeedback = savedFeedback => ({
  type: feedbackActionTypes.UPDATE_FEEDBACK,
  savedFeedback
});

export const closeSnackbar = () => ({
  type: feedbackActionTypes.CLOSE_SNACKBAR
});
