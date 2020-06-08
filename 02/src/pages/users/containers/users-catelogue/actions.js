import {API} from 'app/resources/users-catelogue/services'
import {actionNames} from 'root/action-names'

const userCatelog = {
  init() {
    return (dispatch, getState) => {
      dispatch({type: actionNames.usersPage_userCatelogue_init})
    }
  },

  fetchUserCatelog() {
    return async (dispatch, getState) => {
      dispatch({
        type: actionNames.usersPage_userCatelogue_fetch_begin,
      })

      try {
        const userCatelog = await API.usersCatelogue.getAll()
        const ids_userCatelog = userCatelog.map(user => user._id)
        dispatch({
          type: actionNames.usersPage_userCatelogue_fetch_success,
          payload: {ids_userCatelog},
        })
      } catch (err) {
        dispatch({
          type: actionNames.usersPage_userCatelogue_fetch_fail,
          error: err,
        })
      }
    }
  },
}

export default userCatelog
