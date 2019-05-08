import React from "react"
import { hot } from "react-hot-loader/root"
import { useLazyBundle } from "src/utils/useLazyBundle"
import LoadingComponent from "src/components/Loading/Loading.jsx"
import HomePageLazy from "bundle-loader?lazy!src/pages/HomePage"

const Root = () => {
  const [HomePage] = useLazyBundle(HomePageLazy, 500, LoadingComponent)

  return <HomePage />
}

export default hot(Root)
