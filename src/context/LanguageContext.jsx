/* LanguageContext.jsx */

import { createContext, useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import useKeyPress from '../hooks/useKeyPress'
import useLocalStorage from '../hooks/useLocalStorage'

import { enUS, ptBR } from '../constants/languages'

// Context for the internationalization functionality
const LanguageContext = createContext()

function LanguageProvider({ children }) {
  const SHORTCUT_KEY = 'l'
  const clientLang = navigator?.languages[0] // Preferred language of the browser
  const startingLang = clientLang === 'pt-BR' || clientLang === 'pt' ? ptBR : enUS
  const [language, setLanguage] = useLocalStorage('language', startingLang)
  const { i18n } = useTranslation()
  useKeyPress(SHORTCUT_KEY, changeLanguage)

  useEffect(() => {
    // Changes the language of the page and its title

    const { value } = language
    i18n.changeLanguage(value)
  }, [language])

  function changeLanguage() {
    setLanguage((currentLang) => (currentLang.id === 'PT' ? enUS : ptBR))
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, changeLanguage, SHORTCUT_KEY }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

function useLanguage() {
  // Sets the language of the page

  return useContext(LanguageContext)
}

export { useLanguage as default, LanguageProvider }
