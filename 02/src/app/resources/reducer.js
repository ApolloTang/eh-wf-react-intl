import {combineReducers} from 'redux'

import {resouces_userCatelogue} from './users-catelogue/reducer'
import {resouces_users} from './users/reducer'

const reducers = combineReducers({
  userCatelogue: resouces_userCatelogue,
  users: resouces_users,
})

export {reducers as resources}
