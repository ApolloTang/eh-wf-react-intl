import {combineReducers} from 'redux'

import {usersPage_userCatelogue} from './users-catelogue/reducer'
import {usersPage_userDetails} from './user-details/reducer'

const reducers = combineReducers({
  userCatelogue: usersPage_userCatelogue,
  userDetails: usersPage_userDetails,
})

export {reducers as usersPage}
