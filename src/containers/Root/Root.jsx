import React from "react"
import { hot } from "react-hot-loader/root"
import useLazyBundle from "src/utils/useLazyBundle"

import HelloReactLazy from "bundle-loader?lazy!src/components/HelloReact/HelloReact"

function LoadingComponent() {
  return <span>Loading...</span>
}

function Root() {
  const [HelloReact] = useLazyBundle(HelloReactLazy, 500, LoadingComponent)

  return (
    <React.Fragment>
      <HelloReact name={'Charles'} />
    </React.Fragment>
  )
}

export default hot(Root)
