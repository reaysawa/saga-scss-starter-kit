import React from "react"
import useLazyBundle from "src/utils/useLazyBundle"

import HelloReactLazy from "bundle-loader?lazy!src/components/HelloReact/HelloReact"

function LoadingComponent() {
  return <span>Loading...</span>
}

function HomePage() {
  const [HelloReact] = useLazyBundle(HelloReactLazy, 500, LoadingComponent)

  return (
    <React.Fragment>
      <HelloReact name={"Charles"} />
    </React.Fragment>
  )
}

export default HomePage
