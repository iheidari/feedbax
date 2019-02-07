import feedbackActionTypes from '../../constants/actionTypes/feedback';

export const loadFeedbacksAsync = (page, take) => ({
  type: feedbackActionTypes.LOAD_FEEDBACKS_ASYNC,
  page,
  take
});
export const loadFeedbacks = feedbacks => ({
  type: feedbackActionTypes.LOAD_FEEDBACKS,
  feedbacks
});

export const deleteFeedbackAsync = (feedbackId, feedbacks) => ({
  type: feedbackActionTypes.DELETE_FEEDBACK_ASYNC,
  feedbackId,
  feedbacks
});
export const deleteFeedback = (deletedFeedback, feedbacks) => {
  const newFeedbacks = feedbacks.filter(
    feedback => feedback.id !== deletedFeedback.id
  );
  return {
    type: feedbackActionTypes.DELETE_FEEDBACK,
    feedbacks: newFeedbacks
  };
};

export const modelChanged = (feedback, value) => ({
  type: feedbackActionTypes.MODEL_CHANGED,
  feedback: { ...feedback, ...value }
});

export const loadFeedbackAsync = (feedbackId, feedbacks) => ({
  type: feedbackActionTypes.LOAD_FEEDBACK_ASYNC,
  feedbackId,
  feedbacks
});
export const loadFeedback = feedback => ({
  type: feedbackActionTypes.LOAD_FEEDBACK,
  feedback
});

export const saveFeedbackAsync = (feedback, feedbacks) => ({
  type: feedbackActionTypes.SAVE_FEEDBACK_ASYNC,
  feedback,
  feedbacks
});
export const addFeedback = (savedFeedback, feedbacks) => ({
  type: feedbackActionTypes.ADD_FEEDBACK,
  feedbacks: [...feedbacks, savedFeedback]
});
export const updateFeedback = (savedFeedback, feedbacks) => {
  const newFeedbacks = feedbacks.map(feedback => {
    if (feedback.id === savedFeedback.id) {
      return savedFeedback;
    } else {
      return feedback;
    }
  });
  return { type: feedbackActionTypes.UPDATE_FEEDBACK, feedbacks: newFeedbacks };
};
