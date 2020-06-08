import _ from 'lodash'
import {actionNames} from 'root/action-names'

import {array_to_IndexirizedObj} from 'util/helper.js'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionNames.resources_users_update: {
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

export {reducer as resouces_users}
