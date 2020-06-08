import _get from 'lodash/get'
import api from 'api'

import {actionNames} from 'root/action-names'
import {normalized} from 'util/helper.js'

const users = {
  getOne: userId => (dispatch, getState) => {
    const appState = getState()
    const existingIds = Object.keys(_get(appState, 'resources.users', {}))
    const userIdExist = existingIds.includes(userId)

    if (!userIdExist) {
      api.users.getOne(userId).then(user => {
        dispatch({
          type: actionNames.usersPage_userDetails_resources_users_updated,
          payload: {user: normalized([user])},
        })
        return user
      })
    } else {
      return new Promise(resolve => {
        const user = _get(appState, `resources.users.${userId}`, {})
        dispatch({
          type:
            actionNames.usersPage_userDetails_resources_users_updateresources_users_updated,
          payload: {user: normalized([user])},
        })
        resolve(user)
      })
    }
  },
}

const serviceActions = {
  users,
}

export {serviceActions}
