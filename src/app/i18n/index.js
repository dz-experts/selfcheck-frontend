import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import Cookies from 'js-cookie'

import constants from './../../constants'

// %Add any new languages here%
import ar from './ar/resource';
import en from './en/resource';

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: Cookies.get(constants.COOKIE_LANG_KEY) ? Cookies.get(constants.COOKIE_LANG_KEY) : constants.DEFAULT_LANG,

    // allow keys to be phrases having `:`, `.`
    nsSeparator: false,
    keySeparator: false,

    // do not load a fallback
    fallbackLng: false,

    // do not allow null as translation value (anything null will be considered as if not translated)
    returnNull: false,

    resources: {
      // %Add any new languages here%
      ar: {
        translation: ar
      },
      en: {
        translation: en
      }
    }
  });

export const isRTL = (lang) => {
  return i18next.dir(lang) === 'rtl';
}

export default i18next;
