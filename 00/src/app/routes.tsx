import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {PageA, PageNoMatch} from 'pages/'
import {Home} from 'pages/home/'
import {PageB} from 'pages/page-b/'

import {Users} from 'pages/users/'

const navigationDirective = [
  {to: '/', displayText: 'Home'},
  {to: '/a', displayText: 'PageA'},
  {to: '/users', displayText: 'Users'},
  {to: '/no-match', displayText: 'no-match'},
]

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/b" component={PageB} />
    <Route exact path="/a">
      <PageA />
    </Route>
    <Route path="/users">
      <Users />
    </Route>
    <Route>
      <PageNoMatch />
    </Route>
  </Switch>
)

export {Routes, navigationDirective}
