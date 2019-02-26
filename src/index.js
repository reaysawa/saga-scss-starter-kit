//import "core-js/shim"
//import "regenerator-runtime/runtime"
import { setConfig } from "react-hot-loader"
setConfig({
  ignoreSFC: true,
  logLevel: "",
})

import React from "react"
import { render } from "react-dom"
import Root from "src/containers/Root"
import { Provider } from "react-redux"
import store from "src/redux/store"

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("app")
)
