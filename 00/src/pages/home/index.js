import React, {useContext} from 'react';
import {FormattedMessage, FormattedDate} from 'react-intl';
import {LangContext, LangContextType} from 'root/language/'

const Home = () => {
  const langContext = useContext(LangContext)
  const locale = langContext.locale

  const rtf = new Intl.RelativeTimeFormat(locale, {
      localeMatcher: "best fit", // other values: "lookup"
      numeric: "always", // other values: "auto"
      style: "long", // other values: "short" or "narrow"
  });

  const amount = new Intl.PluralRules(locale, { type: 'ordinal' }).select(2)

  return (
  <div>
    <FormattedMessage id="app.content" defaultMessage="Learn React" />
    <FormattedMessage
      id="app.channel.plug"
      defaultMessage="Video brought to you by Coding with Chaim"
      values={{channelName: 'Coding with Chaim'}}
    />
    <FormattedMessage
      id="app.header"
      defaultMessage="Edit <my-tag>src/App.js</my-tag> js and save to reload."
      values={{
        fileName: 'src/App.js',
        'my-tag': fileName => <strong>{fileName}</strong>,
      }}
    />
    <br />
    <FormattedDate
      value={Date.now()}
      year="numeric"
      month="long"
      day="numeric"
      weekday="long"
    />
    <h1>{ amount }</h1>
    <h1>{ rtf.format(-1, "day") }</h1>
  </div>
);

}
export {Home};
