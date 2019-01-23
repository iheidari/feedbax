import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/root";
import rootSaga from "../sagas/root";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saga = createSagaMiddleware();
const middleWares = [saga];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWares))
);

saga.run(rootSaga);

export default store;
