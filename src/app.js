import React from "react"
import { render } from "react-dom"

import { StoreContext } from "redux-react-hook"
import configureStore from "src/redux"
const { store, firstRoute } = configureStore()
store.dispatch(firstRoute())

import Root from "src/containers/Root/Root"

render(
  <StoreContext.Provider store={store}>
    <Root />
  </StoreContext.Provider>,
  document.getElementById("app")
)
