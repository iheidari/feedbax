import { put } from 'redux-saga/effects';

import feedbackActionTypes from '../../constants/actionTypes/feedback';

export function* saveFeedback(feedbackModel) {
  const saveResult = yield 1;
  put({ type: feedbackActionTypes.SAVE_FEEDBACK, saveResult });
}
