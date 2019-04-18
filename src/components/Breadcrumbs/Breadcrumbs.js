import React, { useCallback } from 'react'
import { useMappedState } from "redux-react-hook"

export function Breadcrumbs() {
  const { location } = useMappedState(
    useCallback(
      state => ({
        location: state.location
      }),
      []
    )
  )

  return (
    <div>{JSON.stringify(location)}</div>
  )
}

export default Breadcrumbs

