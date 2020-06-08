import {rootUrl} from 'root/config'
import {createHttp} from 'util/rest'

const getOne = userId => {
  return createHttp.get(`${rootUrl}/users/${userId}`)
}

const users = {
  getOne,
}

export {users}
