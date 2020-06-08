
import React, {useState} from 'react'
import {IntlProvider} from 'react-intl'

import Spanish from 'translations/es-MX.json'
import English from 'translations/en-US.json'


const local = 'es-MX' //navigator.language;
// const local = navigator.language;

let lang = English
if (local === 'es-MX') {
  lang = Spanish
}

type LangContextType = {
  locale: string
  selectLang: (e:React.ChangeEvent<HTMLSelectElement>) => void
}

const LangContext = React.createContext<LangContextType>({
  locale: 'es-US',
  selectLang: ()=>undefined,
})

const Language = (props: {children: React.ReactNode}) => {
  const [locale, setLocale] = useState(local)
  const [message, setMessage] = useState(lang)

  function selectLang(e:React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = e.target.value

    setLocale(newLocale)
    if (newLocale === 'es-MX') {
      setMessage(Spanish)
    } else {
      setMessage(English)
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
