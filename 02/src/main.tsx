// core-js@3 does not polyfill Object.assign in some situation
// so we have to import manually
// https://github.com/zloirock/core-js/issues/639
if (!Object.assign) {
  // @ts-ignore
  void import('core-js/features/object/assign');
}

import React from 'react'
import ReactDom from 'react-dom'

import {Root} from './root/'

console.log('process.env.envFileName: ', process.env.envFileName)
console.log('process.env.DOT_ENV_TEST: ', process.env.DOT_ENV_TEST)
console.log('process.env.foo: ', process.env.foo)
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)
console.log(
  'process.env.ENABLE_REDUX_LOGGER: ',
  process.env.ENABLE_REDUX_LOGGER,
)


const foo = <T, >( a:T, b:T) => {
  console.log(b); return a
}

foo<string>('a', 'a');

const getArray = <T,>(items: T[]): T[] => Array<T>().concat(items)

const myNumArr = getArray<number>([100, 200, 300]);
const myStrArr = getArray<string>(["Hello", "World"]);

myNumArr.push(1)

console.log(myNumArr)

const runApp = () => {
  const appContainer = document.getElementById('app-container')
  ReactDom.render(<Root />, appContainer)
}

if(!window.Intl.PluralRules) {
  void Promise.all([
    // @ts-ignore
    import('@formatjs/intl-getcanonicallocales/polyfill'),
    // @ts-ignore
    import('@formatjs/intl-pluralrules/polyfill'),
    // @ts-ignore
    import('@formatjs/intl-pluralrules/dist/locale-data/en'),
    // @ts-ignore
    import('@formatjs/intl-pluralrules/dist/locale-data/es'),

    // @ts-ignore
    import('@formatjs/intl-relativetimeformat/polyfill'),
    // @ts-ignore
    import('@formatjs/intl-relativetimeformat/dist/locale-data/en'),
    // @ts-ignore
    import('@formatjs/intl-relativetimeformat/dist/locale-data/es'),
    // @ts-ignore
  ]).then(() => {
    runApp()
  })
} else {
  runApp()
}

