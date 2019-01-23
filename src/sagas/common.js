import {put} from 'redux-saga/effects';

import commonActionTypes from '../constants/actionTypes/common';

export function* lookupAsync() {
  const result = yield {
    category: [
      { name: "Business" },
      { name: "Development" },
      { name: "Systems" }
    ]
  };
  yield put({type: commonActionTypes.LOOKUPS, lookups: result});
}
