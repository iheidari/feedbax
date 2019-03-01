import { put } from 'redux-saga/effects';
import httpClient from '../../api/httpClient';
import * as commonActionCreators from '../actionCreators/common';
import * as feedbackActionCreators from '../actionCreators/feedback';
import { generateQueryString } from '../../util/http';

export function* loadFeedbacksAsync(props) {
  const { type, ...queryStringObjects } = props;
  const queryString = generateQueryString(queryStringObjects);

  const { count, result: feedbacks } = yield httpClient.get(
    `/feedback?${queryString}`
  );

  yield put(
    feedbackActionCreators.loadFeedbacks(feedbacks, count, queryStringObjects)
  );
}

export function* deleteFeedbackAsync({ feedbackId, loadingProps }) {
  const feedback = yield httpClient.delete(`/feedback/${feedbackId}`);
  yield put(feedbackActionCreators.deleteFeedback(feedback));
  yield put(commonActionCreators.closeDialog());
  yield put(
    commonActionCreators.showSnackbar({ content: 'Deleted Successfully' })
  );
  yield loadFeedbacksAsync(loadingProps);
}

export function* loadFeedbackAsync({ feedbackId }) {
  const feedback = yield httpClient.get(`/feedback/${feedbackId}`);
  yield put(feedbackActionCreators.loadFeedback(feedback));
}

export function* saveFeedbackAsync({ feedback }) {
  const savedFeedback = yield httpClient.post('/feedback', feedback);
  yield feedback.id
    ? put(feedbackActionCreators.updateFeedback(savedFeedback))
    : put(feedbackActionCreators.addFeedback(savedFeedback));
  yield put(
    commonActionCreators.showSnackbar({ content: 'Saved Successfully' })
  );
}
