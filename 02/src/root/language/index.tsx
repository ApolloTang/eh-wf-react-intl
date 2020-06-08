import React, {useState} from 'react'
import {IntlProvider} from 'react-intl'

import Spanish from 'translations/es-ES.json'
import English from 'translations/en-US.json'
import French from 'translations/fr-FR.json'

type importMsgType = {
  [k:string]:string
}
type localType = 'en-US'|'es-ES'|'fr-FR'

const InitialLocale = (navigator.language || 'en-US') as unknown as  localType

let initialMessage:importMsgType = English
if (InitialLocale === 'es-ES') {
  initialMessage = Spanish as importMsgType
} else if (InitialLocale === 'fr-FR') {
  initialMessage = French as importMsgType
}

type LangContextType = {
  locale: string
  selectLang: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const LangContext = React.createContext<LangContextType>({
  locale: 'es-US',
  selectLang: () => undefined,
})

const Language = (props: {children: React.ReactNode}) => {
  const [locale, setLocale] = useState<localType>(InitialLocale)
  const [message, setMessage] = useState<importMsgType>(initialMessage)

  function selectLang(e: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = e.target.value as localType

    setLocale(newLocale)
    if (newLocale === 'es-ES') {
      setMessage(Spanish)
    } else if (newLocale === 'fr-FR') {
      setMessage(French)
    }
  }

  console.log('xxxx: locale:', locale)
  console.log('xxxx: message:', message)
  return (
    <LangContext.Provider value={{locale, selectLang}}>
      <IntlProvider locale={locale} messages={message}>
        {props.children}
      </IntlProvider>
    </LangContext.Provider>
  )
}

export {Language, LangContext, LangContextType}
