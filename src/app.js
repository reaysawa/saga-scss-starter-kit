import React from "react"
import { render } from "react-dom"

import { StoreContext } from "redux-react-hook"
import configureStore from "src/redux"

import Root from "src/containers/Root/Root"

render(
  <StoreContext.Provider value={configureStore()}>
    <Root />
  </StoreContext.Provider>,
  document.getElementById("app")
)
