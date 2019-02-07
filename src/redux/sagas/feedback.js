import { put } from 'redux-saga/effects';
import httpClient from '../../api/httpClient';

import feedbackActionTypes from '../../constants/actionTypes/feedback';

export function* loadFeedback({ feedbackId, feedbacks }) {
  let feedback = feedbacks.find(feedback => feedback.id === feedbackId);
  if (feedback)
    yield put({ type: feedbackActionTypes.LOAD_FEEDBACK, feedback });
  else {
    feedback = yield httpClient.get(`/feedback/${feedbackId}`);
    yield put({ type: feedbackActionTypes.LOAD_FEEDBACK, feedback });
  }
}

export function* saveFeedback({ feedbackModel }) {
  console.log('savefeedback');
  console.log(feedbackModel);
  let actionType = feedbackModel.id
    ? feedbackActionTypes.UPDATE_FEEDBACK
    : feedbackActionTypes.ADD_FEEDBACK;
  const savedFeedback = yield httpClient.post('/feedback', feedbackModel);
  console.log(actionType);
  console.log(savedFeedback);
  yield put({
    type: actionType,
    savedFeedback
  });
}
