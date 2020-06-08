import _ from 'lodash'
import {actionNames} from 'root/action-names'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionNames.resources_userCatelogue_update: {
      const payload = action.payload
      const userCat_next = {
        ...state,
        ...payload.usersCatelogue,
      }
      return userCat_next
    }

    case actionNames.resources_userCatelog_delete: {
      const payload = action.payload

      let id_deletedUser
      if (payload.hasOwnProperty('deletedUser')) {
        // payload receive a single user object
        id_deletedUser = payload.deletedUser._id
      }
      if (payload.hasOwnProperty('deletedUsers')) {
        // payload receive a collection of users object in array
        // ... not implimented
      }

      console.log('state ', state)
      const users_next = _.cloneDeep(state.users)
      delete users_next[id_deletedUser]
      return users_next
    }

    default: {
      return state
    }
  }
}

export {reducer as resouces_userCatelogue}
