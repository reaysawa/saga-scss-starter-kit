import React, { useCallback } from "react"
import { useDispatch, useMappedState } from "redux-react-hook"

export function NotFoundPage() {
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
    <>
      <span>Not found!</span>
      <button
        onClick={() =>
          dispatch({
            ...location,
            meta: { location: { current: { ...location }, kind: "back" } }
          })
        }
      >
        BACK!
      </button>
    </>
  )
}

export default NotFoundPage
