import {actionNames_resources_userCatelogue} from './users-catelogue/action-names'
import {actionNames_resources_users} from './users/action-names'

const actionNames = {
  ...actionNames_resources_userCatelogue,
  ...actionNames_resources_users,
}

export {actionNames as actionNames_resources}
