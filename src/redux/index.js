import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSaga from "redux-saga"
import { createLogger } from "redux-logger"

import reducers from "src/redux/reducers"
import rootSaga from "src/sagas"

const saga = createSaga()
const logger = createLogger({ diff: true })

const sagaMiddleware = (() =>
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(saga, logger))
    : applyMiddleware(saga))()

export default preloadedState => {
  const rootReducer = combineReducers(reducers)
  const middlewareEnhancers = compose(sagaMiddleware)

  const store = createStore(rootReducer, preloadedState, middlewareEnhancers)
  saga.run(rootSaga)

  return store
}
