import {serviceActions} from './resources/users/service-actions'
import {actionNames} from 'root/action-names'

const actions = {
  init() {
    return dispatch => {
      dispatch({
        type: actionNames.usersPage_userDetails_init,
      })
    }
  },

  fetchUser: userId => async dispatch => {
    dispatch({
      type: actionNames.usersPage_userDetails_fetch_begin,
    })

    let user

    try {
      user = await dispatch(serviceActions.users.getOne(userId))
      dispatch({
        type: actionNames.usersPage_userDetails_fetch_success,
        payload: {user},
      })
    } catch (error) {
      dispatch({
        type: actionNames.usersPage_userDetails_fetch_fail,
        payload: error,
      })
    }

    return user
  },
}

export {actions as actions_userDetails}
