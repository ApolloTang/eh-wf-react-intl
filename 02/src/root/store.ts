import {PROD} from './config'

import {createStore, applyMiddleware, compose} from 'redux'

import {rootReducer} from './reducers'
import {middleware} from './middleware'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

type T_appState = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(...middleware))

// Development
if (!PROD) {
  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
  )
}

export {store, T_appState}
