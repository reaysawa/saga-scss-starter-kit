import React, { useCallback } from "react"

import { Link, mapRudyStoreStateToProps } from "rudy-link"
import { useMappedState } from "redux-react-hook"

const useRudyLink = () => props => {
  const rudyFromStore = useMappedState(
    useCallback(state => {
      return {
        rudy: state.rudy
      }
    }, [])
  )

  return (
    <Link {...mapRudyStoreStateToProps(rudyFromStore, props)} {...props}>
      {props.children}
    </Link>
  )
}

export default useRudyLink
