import React, { useCallback } from "react"
import { useMappedState } from "redux-react-hook"
import { hot } from "react-hot-loader/root"

function Root() {
  const { Page } = useMappedState(
    useCallback(
      ({ pages }) => ({
        Page: pages
      }),
      []
    )
  )
  return <Page />
}

export default hot(Root)
