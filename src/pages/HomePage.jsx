import React from "react"
import useLazyBundle from "src/utils/useLazyBundle"

import MainLayout from "src/layouts/MainLayout/MainLayout.jsx"
import HelloReactLazy from "bundle-loader?lazy!src/components/HelloReact/HelloReact.jsx"
import LoadingComponent from 'src/components/Loading/Loading.jsx'

function HomePage() {
  const [HelloReact] = useLazyBundle(HelloReactLazy, 500, LoadingComponent)

  return (
    <MainLayout>
      <HelloReact name={"Michael"} />
    </MainLayout>
  )
}

export default HomePage
