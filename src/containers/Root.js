import React  from "react"
import { hot } from "react-hot-loader/root"

import HelloReact from "src/components/HelloReact"
import { ComponentOne, ComponentTwo } from "src/components/AnotherComponent"

const Root = () => {
  return (
      <React.Fragment>
        <HelloReact />
        <ComponentOne />
        <ComponentTwo />
      </React.Fragment>
  )
}

export default hot(Root)
