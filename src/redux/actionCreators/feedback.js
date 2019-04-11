import feedbackActionTypes from '../../constants/actionTypes/feedback';

export const loadFeedbacksAsync = (page = 1, take = 3, sort, order) => ({
  type: feedbackActionTypes.LOAD_FEEDBACKS_ASYNC,
  page,
  take,
  sort,
  order
});

export const loadFeedbacks = (feedbacks, count, queryStringObjects) => {
  // let refactoredFeedbacks = feedbacks.map(feedback => {
  //   let refactoredFeedback = {};
  //   for (let props in feedback) {
  //     refactoredFeedback[props] = { value: feedback[props] };
  //   }
  //   return refactoredFeedback;
  // });
  return {
    type: feedbackActionTypes.LOAD_FEEDBACKS,
    // feedbacks: refactoredFeedbacks,
    feedbacks,
    count,
    queryStringObjects
  };
};

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

export const loadFeedback = feedback => {
  return {
    type: feedbackActionTypes.LOAD_FEEDBACK,
    feedback
  };
};

export const saveFeedbackAsync = feedback => {
  return {
    type: feedbackActionTypes.SAVE_FEEDBACK_ASYNC,
    feedback
  };
};

export const addFeedback = savedFeedback => {
  return {
    type: feedbackActionTypes.ADD_FEEDBACK,
    savedFeedback
  };
};

export const updateFeedback = savedFeedback => {
  return {
    type: feedbackActionTypes.UPDATE_FEEDBACK,
    savedFeedback
  };
};
