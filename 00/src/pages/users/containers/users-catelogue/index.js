import React from 'react'
import _get from 'lodash/get'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import {mapStoreToProps, mapDispatchToProps} from './selector'

const UserItem = ({displayName, id, id_selectedUser}) => (
  <div className={id === id_selectedUser ? 'is-active' : ''}>
    <NavLink to={`/users/${id}`} activeClassName="is-active">
      {displayName}
    </NavLink>
  </div>
)

const UserList = ({userCatelog, id_selectedUser}) => {
  const ids = Object.keys(userCatelog)
  return (
    <div>
      {ids.map(id => {
        const displayName = _get(userCatelog, `${id}.name`, '')
        return (
          <UserItem
            key={id}
            id_selectedUser={id_selectedUser}
            id={id}
            displayName={displayName}
          />
        )
      })}
    </div>
  )
}

const Catalog = props => {
  React.useEffect(() => {
    props.dispatch_init()
    props.dispatch_fetchUserCatelog()
    return () => {
      console.log('Dialogue unmounted, will cancel fetch data')
    }
  }, [])

  const userIdInParam = _get(props, 'match.params.userId', 21323)
  return props.isLoading ? (
    <div>...loading</div>
  ) : (
    <div className="userCatelog">
      <UserList
        id_selectedUser={userIdInParam}
        userCatelog={props.userCatelogue}
      />
    </div>
  )
}

const connectedComponent = connect(mapStoreToProps, mapDispatchToProps)(Catalog)

export {connectedComponent as UsersCatelogue}
