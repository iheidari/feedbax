import { put } from 'redux-saga/effects';
import httpClient from '../../api/httpClient';

import feedbackActionTypes from '../../constants/actionTypes/feedback';

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
