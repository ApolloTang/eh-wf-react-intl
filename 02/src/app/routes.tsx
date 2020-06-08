import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {PageA, PageNoMatch} from 'pages/'
import {Home} from 'pages/home/'
import {Bookdetail} from 'pages/bookdetails/'
import {PageB} from 'pages/page-b/'

import {Users} from 'pages/users/'

const navigationDirective = [
  {to: '/', displayText: 'Home'},
  {to: '/book/1', displayText: 'book 1'},
  {to: '/a', displayText: 'PageA'},
  {to: '/users', displayText: 'Users'},
  {to: '/no-match', displayText: 'no-match'},
]

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/book/:bookId/" component={Bookdetail} />
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
