import { takeEvery } from "redux-saga/effects";
import commonActionTypes from "../constants/actionTypes/common";
import * as commonSagas from "./common";

function* watchAll() {
  yield takeEvery(commonActionTypes.LOOKUPS_ASYNC, commonSagas.lookupAsync);
}

export default watchAll;
