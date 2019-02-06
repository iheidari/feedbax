import { combineReducers } from 'redux';
import common from './common';
import feedback from './feedback';

const rootReducer = combineReducers({
  common,
  feedback
});

export default rootReducer;
