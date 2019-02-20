import { put } from 'redux-saga/effects';
import httpClient from '../../api/httpClient';
import * as feedbackActionCreators from '../actionCreators/feedback';
import { generateQueryString } from '../../util/http';

export function* loadFeedbacksAsync(props) {
  const { type, ...queryStringObjects } = props;
  const queryString = generateQueryString(queryStringObjects);

  const feedbacks = yield httpClient.get(`/feedback?${queryString}`);
  yield put(
    feedbackActionCreators.loadFeedbacks(feedbacks, queryStringObjects)
  );
}

export function* deleteFeedbackAsync({ feedbackId, feedbacks }) {
  const feedback = yield httpClient.delete(`/feedback/${feedbackId}`);
  yield put(feedbackActionCreators.deleteFeedback(feedback, feedbacks));
}

export function* loadFeedbackAsync({ feedbackId, feedbacks }) {
  let feedback;
  if (feedbacks)
    feedback = feedbacks.find(feedback => feedback.id === feedbackId);
  if (!feedback || !feedbacks)
    feedback = yield httpClient.get(`/feedback/${feedbackId}`);
  yield put(feedbackActionCreators.loadFeedback(feedback));
}

export function* saveFeedbackAsync({ feedback, feedbacks }) {
  const savedFeedback = yield httpClient.post('/feedback', feedback);
  yield feedback.id
    ? put(feedbackActionCreators.updateFeedback(savedFeedback, feedbacks))
    : put(feedbackActionCreators.addFeedback(savedFeedback, feedbacks));
}
