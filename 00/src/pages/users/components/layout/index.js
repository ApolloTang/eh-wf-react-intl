import React from 'react'

const PageLayout = ({UsersCatelog, WorkspaceControl, Workspace}) => {
  return (
    <div className="userpage_layout">
      {UsersCatelog}
      {WorkspaceControl}
      {Workspace}
    </div>
  )
}

export {PageLayout as UsersPageLayout}
