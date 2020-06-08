import React from 'react';
import {FormattedMessage, FormattedDate} from 'react-intl';

const PageB = () => (
  <div>
    <FormattedMessage id="pageb.content" defaultMessage="Learn React" />
    <FormattedMessage
      id="pageb.channel.plug"
      defaultMessage="Video brought to you by Coding with Chaim"
      values={{channelName: 'Coding with Chaim'}}
    />
    <FormattedMessage
      id="pageb.header"
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
  </div>
);

export {PageB};
