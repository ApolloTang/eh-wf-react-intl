import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {PageNoMatch} from 'pages/'

import {UserDetails} from 'pages/users/containers/user-details/'

const UserNew = () => <div>UserNew </div>
const UserEdit = () => <div>UserEdit </div>

const Routes = () => (
  <Switch>
    <Route exact path="/users/" component={() => <div>LandingWorkspace</div>} />
    <Route exact path="/users/new">
      <UserNew />
    </Route>
    <Route exact path="/users/:userId">
      <UserDetails />
    </Route>
    <Route exact path="/users/:userId/edit">
      <UserEdit />
    </Route>
    <Route>
      <PageNoMatch />
    </Route>
  </Switch>
)

export {Routes}
