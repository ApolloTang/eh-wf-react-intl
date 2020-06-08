import {combineReducers} from 'redux'
import {actionNames} from 'root/action-names'

import {resources_users} from './resources/users/reducer'

const initialState = {
  isLoading: false,
}

const ux = (state = {...initialState}, action) => {
  switch (action.type) {
    case actionNames.usersPage_userDetails_init: {
      return {...state}
    }

    case actionNames.usersPage_userDetails_fetch_begin: {
      const state_next = {
        ...state,
        isLoading: true,
      }
      return state_next
    }

    case actionNames.usersPage_userDetails_fetch_success: {
      const state_next = {
        ...state,
        isLoading: false,
      }
      return state_next
    }

    case actionNames.usersPage_userDetails_fetch_fail: {
      const state_next = {
        ...state,
        isLoading: false,
      }
      return state_next
    }

    default: {
      return state
    }
  }
}

const reducer = combineReducers({
  ux,
  resources_users,
})

export {reducer as usersPage_userDetails}
export {initialState}
