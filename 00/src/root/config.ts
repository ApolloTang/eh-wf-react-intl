const DEBUG = process && process.env && process.env.debug === 'true'
const PROD = process && process.env && process.env.prod === 'true'
const TEST = process && process.env && process.env.NODE_ENV === 'test'

const withReduxLogger = process.env.ENABLE_REDUX_LOGGER
const shouldPersistStoreState = false

let api_urlAndPort

if (PROD) {
  api_urlAndPort = 'http://localhost:3000'
} else if (TEST) {
  api_urlAndPort = 'http://localhost:3000'
} else {
  api_urlAndPort = 'http://localhost:3000'
}

const rootUrl = `${api_urlAndPort}/api`

export {DEBUG, PROD, TEST, withReduxLogger, shouldPersistStoreState, rootUrl}
