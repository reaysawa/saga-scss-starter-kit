import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSaga from "redux-saga"
import { createLogger } from "redux-logger"

import { createRouter } from "@respond-framework/rudy"
import appRoutes from "src/routes"

import reducers from "src/redux/reducers"
import rootSaga from "src/sagas"

const saga = createSaga()
const logger = createLogger({ diff: true })

const sagaMiddleware = (() =>
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(saga, logger))
    : applyMiddleware(saga))()

export default preloadedState => {
  const {
    reducer: routeReducer,
    middleware: routeMiddleware,
    firstRoute
  } = createRouter(appRoutes)

  const rootReducer = combineReducers({ ...reducers, location: routeReducer })
  const middlewareEnhancers = compose(
    sagaMiddleware,
    applyMiddleware(routeMiddleware)
  )

  const store = createStore(rootReducer, preloadedState, middlewareEnhancers)
  saga.run(rootSaga)

  return { store, firstRoute }
}
