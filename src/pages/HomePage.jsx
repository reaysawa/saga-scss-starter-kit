import React from "react"
import useLazyBundle from "src/utils/useLazyBundle"

import MainLayout from "src/layouts/MainLayout/MainLayout"
import HelloReactLazy from "bundle-loader?lazy!src/components/HelloReact/HelloReact"
import { useDispatch } from "redux-react-hook"

function LoadingComponent() {
  return <span>Loading...</span>
}

function HomePage() {
  const [HelloReact] = useLazyBundle(HelloReactLazy, 500, LoadingComponent)
  const dispatch = useDispatch()

  return (
    <MainLayout>
      <span
        role="link"
        tabIndex="0"
        onClick={() => dispatch({ type: 'NOT_FOUND', location: { kind: 'set' } })}
      >
        NOT_FOUND
      </span>
      <HelloReact name={"Charles"} />
    </MainLayout>
  )
}

export default HomePage
