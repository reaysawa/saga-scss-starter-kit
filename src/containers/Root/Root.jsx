import React from "react"
//import { hot } from "react-hot-loader/root"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useLazyBundle } from 'src/utils/useLazyBundle'
import LoadingComponent from 'src/components/Loading/Loading.jsx'
import HomePageLazy from "bundle-loader?lazy!src/pages/HomePage"
import AboutPageLazy from "bundle-loader?lazy!src/pages/AboutPage"

const Root = () => {
  const [HomePage] = useLazyBundle(HomePageLazy, 500, LoadingComponent)
  const [AboutPage] = useLazyBundle(AboutPageLazy, 500, LoadingComponent)

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Root

//export default hot(Root)
