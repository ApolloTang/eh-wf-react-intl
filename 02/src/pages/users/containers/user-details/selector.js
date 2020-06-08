import _ from 'lodash'
import {actions_userDetails} from './actions'

const mapStoreToProps = store => {
  const users = _.get(store, `usersPage.userDetails.resources_users`, {})
  const isLoading = _.get(store, `usersPage.userDetails.ux.isLoading`, true)
  return {
    users,
    isLoading,
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch_init() {
    dispatch(actions_userDetails.init())
  },
  dispatch_fetchUser(userId) {
    dispatch(actions_userDetails.fetchUser(userId))
  },
})

export {mapStoreToProps, mapDispatchToProps}
