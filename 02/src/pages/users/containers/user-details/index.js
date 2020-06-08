import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import {mapStoreToProps, mapDispatchToProps} from './selector'

const Comp = props => {
  const userId = props.match.params.userId

  React.useEffect(() => {
    props.dispatch_init()
    return () => {}
  }, [])

  React.useEffect(() => {
    props.dispatch_fetchUser(userId)
    return () => {}
  }, [userId])

  if (props.isLoading) {
    return <div>...loading</div>
  }

  return <div>{JSON.stringify(props.users[userId], null, 2)}</div>
}

const Connected = connect(mapStoreToProps, mapDispatchToProps)(withRouter(Comp))
export {Connected as UserDetails}
