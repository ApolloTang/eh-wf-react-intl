import {actionNames} from 'root/action-names'

const initialState = {
  isLoading: true,
  ids_userCatelog: [],
}

const reducer = (state = {...initialState}, action) => {
  switch (action.type) {
    case actionNames.usersPage_userCatelogue_init: {
      return {...state}
    }

    case actionNames.usersPage_userCatelogue_fetch_begin: {
      const state_prev = state
      const state_next = {
        ...state_prev,
        isLoading: true,
      }
      return state_next
    }

    case actionNames.usersPage_userCatelogue_fetch_success: {
      const payload = action.payload
      const ids_userCatelog = payload.ids_userCatelog

      const state_prev = state
      const state_next = {
        ...state,
        ids_userCatelog,
        isLoading: false,
      }
      return state_next
    }

    case actionNames.usersPage_userCatelogue_fetch_fail: {
      const payload = action.payload
      const state_prev = {...state}
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

export {reducer as usersPage_userCatelogue}
