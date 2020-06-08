import {actionNames_resources} from 'app/resources/action-names'
import {actionNames_usersPage} from 'pages/users/containers/action-names'

const actionNames = {
  ...actionNames_resources,
  ...actionNames_usersPage,
}

console.log('actionNames: ', actionNames)

export {actionNames}
