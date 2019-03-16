import feedbackActionTypes from '../../constants/actionTypes/feedback';

export const loadFeedbacksAsync = (page = 1, take = 3, sort, order) => ({
  type: feedbackActionTypes.LOAD_FEEDBACKS_ASYNC,
  page,
  take,
  sort,
  order
});

export const loadFeedbacks = (feedbacks, count, queryStringObjects) => {
  let refactoredFeedbacks = feedbacks.map(feedback => {
    let refactoredFeedback = {};
    for (let props in feedback) {
      refactoredFeedback[props] = { value: feedback[props] };
    }
    return refactoredFeedback;
  });
  return {
    type: feedbackActionTypes.LOAD_FEEDBACKS,
    feedbacks: refactoredFeedbacks,
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
  let refactoredFeedback = {};
  for (let props in feedback) {
    refactoredFeedback[props] = { value: feedback[props] };
  }
  return {
    type: feedbackActionTypes.LOAD_FEEDBACK,
    feedback: refactoredFeedback
  };
};

export const saveFeedbackAsync = feedback => {
  let refactoredFeedback = {};
  for (let props in feedback) {
    refactoredFeedback[props] = feedback[props].value;
  }
  return {
    type: feedbackActionTypes.SAVE_FEEDBACK_ASYNC,
    feedback: refactoredFeedback
  };
};

export const addFeedback = savedFeedback => {
  let refactoredFeedback = {};
  for (let props in savedFeedback) {
    refactoredFeedback[props] = { value: savedFeedback[props] };
  }
  return {
    type: feedbackActionTypes.ADD_FEEDBACK,
    savedFeedback: refactoredFeedback
  };
};

export const updateFeedback = savedFeedback => {
  console.log(savedFeedback);
  let refactoredFeedback = {};
  for (let props in savedFeedback) {
    refactoredFeedback[props] = { value: savedFeedback[props] };
  }
  return {
    type: feedbackActionTypes.UPDATE_FEEDBACK,
    savedFeedback: refactoredFeedback
  };
};
