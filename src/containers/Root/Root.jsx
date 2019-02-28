import React, { useCallback } from "react"
import { useMappedState } from "redux-react-hook"
import { hot } from "react-hot-loader/root"

function Root() {
  const mapPageToState = useCallback(
    state => ({
      pages: state.pages
    }),
    []
  )
  const { pages } = useMappedState(mapPageToState)
  const Page = pages
  return <Page />
}

export default hot(Root)
