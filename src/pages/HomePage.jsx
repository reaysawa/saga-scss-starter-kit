import React, { useCallback } from "react"
import { NOT_FOUND } from "src/redux/types/routes"
import useLazyBundle from "src/utils/useLazyBundle"

import MainLayout from "src/layouts/MainLayout/MainLayout"
import HelloReactLazy from "bundle-loader?lazy!src/components/HelloReact/HelloReact"
import { useDispatch, useMappedState } from "redux-react-hook"

function LoadingComponent() {
  return <span>Loading...</span>
}

function HomePage() {
  const [HelloReact] = useLazyBundle(HelloReactLazy, 500, LoadingComponent)
  const dispatch = useDispatch()
  const { location } = useMappedState(
    useCallback(
      ({ location }) => ({
        location
      }),
      []
    )
  )

  return (
    <MainLayout>
      <span
        role="link"
        tabIndex="0"
        onClick={() => {
          dispatch({
            type: NOT_FOUND,
            meta: {
              location: {
                current: { ...location },
                kind: "push",
                prev: {
                  payload: location.payload,
                  pathname: location.pathname,
                  type: location.type
                }
              }
            }
          })
        }}
      >
        NOT_FOUND
      </span>
      <HelloReact name={"Charles"} />
    </MainLayout>
  )
}

export default HomePage
