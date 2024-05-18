/* index.js */

import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import ptBrJson from './translations/ptBr.json'
import enUsJson from './translations/enUs.json'

i18n.use(initReactI18next).init({
  fallbackLng: 'ptBr',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ptBr: ptBrJson,
    enUs: enUsJson,
  },
})

export default i18n
