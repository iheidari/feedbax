import { put } from 'redux-saga/effects';
import httpClient from '../../api/httpClient';

import feedbackActionTypes from '../../constants/actionTypes/feedback';

export function* loadFeedbacks({ page, take }) {
  const feedbacks = yield httpClient.get('/feedback');
  yield put({ type: feedbackActionTypes.LOAD_FEEDBACKS, feedbacks });
}

export function* deleteFeedback({ feedbackId }) {
  const feedback = yield httpClient.delete(`/feedback/${feedbackId}`);
  yield put({ type: feedbackActionTypes.DELETE_FEEDBACK, feedback });
}

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
  let actionType = feedbackModel.id
    ? feedbackActionTypes.UPDATE_FEEDBACK
    : feedbackActionTypes.ADD_FEEDBACK;
  const savedFeedback = yield httpClient.post('/feedback', feedbackModel);
  yield put({
    type: actionType,
    savedFeedback
  });
}
