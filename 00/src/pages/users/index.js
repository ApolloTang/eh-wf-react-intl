import React from 'react'
import {withRouter, useRouteMatch} from 'react-router-dom'

import {UsersPageLayout} from './components/layout/'
import {UsersWorkspaceControl} from './components/users-workspace-control/'
import {UsersCatelogue} from './containers/users-catelogue/'
import {Routes} from './routes'

const Page = withRouter(props => {
  const routeMatch = useRouteMatch('/users/:userId')
  const currentUserId = routeMatch && routeMatch.params.userId

  return (
    <UsersPageLayout
      UsersCatelog={<UsersCatelogue />}
      WorkspaceControl={<UsersWorkspaceControl currentUserId={currentUserId} />}
      Workspace={<Routes />}
    />
  )
})

export {Page as Users}
