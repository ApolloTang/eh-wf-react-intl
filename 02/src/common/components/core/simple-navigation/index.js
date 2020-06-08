import React from 'react'
import PropTypes from 'prop-types'

import {NavLink} from 'react-router-dom'

const ModuleRoot = ({navigations}) => (
  <div className={`simple-navigation`}>
    <ul>
      {navigations.map((n, i) => (
        <li key={i}>
          <NavLink exact to={n.to} activeClassName="is-active">
            {n.displayText}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
)

export default ModuleRoot
