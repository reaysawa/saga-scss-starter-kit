import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSaga from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducers from 'src/redux/modules';
import rootSaga from 'src/sagas';

const saga = createSaga();
const logger = createLogger({ diff: true });

const middlewareEnhancer = (() =>
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(saga, logger))
    : applyMiddleware(saga))();

export default createStore(
  combineReducers(reducers),
  undefined,
  middlewareEnhancer,
);

saga.run(rootSaga);
