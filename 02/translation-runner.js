// translationRunner.js
const manageTranslations = require('react-intl-translations-manager').default;

// es2015 import
// import manageTranslations from 'react-intl-translations-manager';

manageTranslations({
  messagesDirectory: 'tmp/messages/src',
  translationsDirectory: 'src/translations/',
  languages: ['es-ES', 'en-US', 'fr-FR'] // any language you need
});
