import { takeEvery } from 'redux-saga/effects';

import commonActionTypes from '../../constants/actionTypes/common';
import feedbackActionTypes from '../../constants/actionTypes/feedback';

import * as commonSagas from './common';
import * as feedbackSagas from './feedback';

function* watchAll() {
  yield takeEvery(commonActionTypes.LOOKUPS_ASYNC, commonSagas.lookupAsync);

  yield takeEvery(
    feedbackActionTypes.LOAD_FEEDBACK_ASYNC,
    feedbackSagas.loadFeedback
  );
  yield takeEvery(
    feedbackActionTypes.SAVE_FEEDBACK_ASYNC,
    feedbackSagas.saveFeedback
  );
}

export default watchAll;
