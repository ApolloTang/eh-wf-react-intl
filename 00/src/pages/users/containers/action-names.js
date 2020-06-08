import {actionNames_usersPage_userCatelogue} from './users-catelogue/action-names'
import {actionNames_usersPage_userDetails} from './user-details/action-names'
import {actionNames_usersPage_userDetails_resources_users} from './user-details/resources/users/action-names'

const actionNames = {
  ...actionNames_usersPage_userCatelogue,
  ...actionNames_usersPage_userDetails,
  ...actionNames_usersPage_userDetails_resources_users,
}

export {actionNames as actionNames_usersPage}
