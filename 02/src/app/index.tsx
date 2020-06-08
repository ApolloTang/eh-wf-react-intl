import React, {useContext} from 'react'
import SimpleNavigation from 'common/components/core/simple-navigation'

import {Routes, navigationDirective} from './routes'
import {LangContext, LangContextType} from 'root/language/'

const App = () => {
  const langContext:LangContextType = useContext(LangContext)

  return (
    <div className="app">
      <select value={langContext.locale} onChange={langContext.selectLang} >
        <option value="en-US">English</option>
        <option value="es-ES">Spanish</option>
        <option value="fr-FR">French</option>
      </select>
      <div className="app-navigation-container">
        <SimpleNavigation navigations={navigationDirective} />
      </div>
      <div className="app-workspace">
        <Routes />
      </div>
    </div>
  )
}

export default App
