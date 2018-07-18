import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import routes from './nav.routes'
import profileRoutes from './profile.route'

export default class Main extends Component {
  render() {
    const array = routes.concat(profileRoutes)

    const result = array.map((route, i) => {
      return <Route exact path={route.path} component={route.component} key={i}></Route>
    })

    return (
      <Fragment>
        {result}
      </Fragment>
    )
  }
}
