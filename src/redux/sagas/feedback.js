import { put } from 'redux-saga/effects';
import httpClient from '../../api/httpClient';
import * as feedbackActionCreators from '../actionCreators/feedback';

export function* loadFeedbacksAsync({ page, take, sort, order }) {
  const queryString = `page=${page}&take=${take}&sort=${sort}&order=${order}`;
  const feedbacks = yield httpClient.get(`/feedback?${queryString}`);
  yield put(feedbackActionCreators.loadFeedbacks(feedbacks));
}

export function* deleteFeedbackAsync({ feedbackId, feedbacks }) {
  const feedback = yield httpClient.delete(`/feedback/${feedbackId}`);
  yield put(feedbackActionCreators.deleteFeedback(feedback, feedbacks));
}

export function* loadFeedbackAsync({ feedbackId, feedbacks }) {
  let feedback = feedbacks.find(feedback => feedback.id === feedbackId);
  if (!feedback) feedback = yield httpClient.get(`/feedback/${feedbackId}`);
  yield put(feedbackActionCreators.loadFeedback(feedback));
}

export function* saveFeedbackAsync({ feedback, feedbacks }) {
  const savedFeedback = yield httpClient.post('/feedback', feedback);
  yield feedback.id
    ? put(feedbackActionCreators.updateFeedback(savedFeedback, feedbacks))
    : put(feedbackActionCreators.addFeedback(savedFeedback, feedbacks));
}
