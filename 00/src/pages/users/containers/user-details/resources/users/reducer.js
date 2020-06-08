import {actionNames} from 'root/action-names'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionNames.usersPage_userDetails_resources_users_updated: {
      const payload = action.payload
      const user = payload.user
      const state_next = {
        ...state,
        ...user,
      }
      return state_next
    }
    default: {
      return state
    }
  }
}

export {reducer as resources_users}
