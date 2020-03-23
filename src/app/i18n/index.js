import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

// %Add any new languages here%
import ar from './ar/resource';
import en from './en/resource';


i18next
.use(initReactI18next) // passes i18n down to react-i18next
.init({
  lng: 'fr',

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
  if (lang === 'ar')
    return true
  return false
}

export default i18next;
