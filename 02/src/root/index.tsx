import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import App from 'app/'
import {store} from './store'
import {Provider} from 'react-redux'

import {Language} from 'root/language/'

const Root = () => (
  <div className="root">
    <Language>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Language>
  </div>
)

export {Root}
