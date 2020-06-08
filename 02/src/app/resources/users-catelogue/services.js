import {store} from 'root/store'
import {createHttp} from 'util/rest'
import {actionNames} from 'root/action-names'

import {normalized} from 'util/helper.js'
import {rootUrl} from 'root/config'

const usersCatelogue = {
  getAll() {
    return createHttp
      .get(`${rootUrl}/userCatelog`) // Note api spell userCatelog instead of userCatelogue
      .then(usersCatelogue => {
        const usersCatelogue_norm = normalized(usersCatelogue)
        store.dispatch({
          type: actionNames.resources_userCatelogue_update,
          payload: {usersCatelogue: usersCatelogue_norm},
        })

        return usersCatelogue
      })
  },
}

const API = {
  usersCatelogue,
}

export {API}
