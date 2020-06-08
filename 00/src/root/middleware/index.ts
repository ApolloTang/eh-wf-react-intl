import {/* TEST, PROD,*/ withReduxLogger} from 'root/config'

import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

const middleware = [thunk]

if (withReduxLogger) {
  middleware.push(
    // @ts-ignore
    createLogger(), // <---- createLogger give weird typscript errors
    // https://github.com/LogRocket/redux-logger/issues/333
  )
}

export {middleware}
