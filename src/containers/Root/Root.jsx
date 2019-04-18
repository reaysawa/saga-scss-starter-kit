import React, { useCallback } from "react"
import { useMappedState } from "redux-react-hook"
import { hot } from "react-hot-loader/root"

function Root() {
  const { pages: Page } = useMappedState(
    useCallback(
      state => ({
        pages: state.pages
      }),
      []
    )
  )
  return <Page />
}

export default hot(Root)
