import _get from 'lodash/get'
import actions from './actions'

const mapStoreToProps = store => {
  const userCatelogue = _get(store, `resources.userCatelogue`, null)
  const isLoading = _get(store, `usersPage.userCatelogue.isLoading`, true)
  const ids_userCatelog = _get(
    store,
    `usersPage.userCatelogue.ids_userCatelog`,
    void 0,
  )

  return {
    userCatelogue,
    isLoading,
    ids_userCatelog,
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch_init() {
    dispatch(actions.init())
  },
  dispatch_fetchUserCatelog() {
    dispatch(actions.fetchUserCatelog())
  },
})

export {mapStoreToProps, mapDispatchToProps}
