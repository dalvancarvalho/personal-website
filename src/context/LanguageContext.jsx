/* LanguageContext.jsx */

import { createContext, useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import useKeyPress from '../hooks/useKeyPress'
import useLocalStorage from '../hooks/useLocalStorage'

import { EN_US, PT_BR, SHORTCUT_KEY } from '../constants/languages'

// Context for the internationalization functionality
const LanguageContext = createContext()

function LanguageProvider({ children }) {
  const CLIENT_LANG = navigator?.languages[0] // Browser's preferred language
  const INITIAL_LANG = CLIENT_LANG === 'pt-BR' || CLIENT_LANG === 'pt' ? PT_BR : EN_US

  const [language, setLanguage] = useLocalStorage('language', INITIAL_LANG)
  const { i18n } = useTranslation()
  useKeyPress(SHORTCUT_KEY, switchLanguage)

  useEffect(() => {
    // Changes the language of the page and its title

    const { value } = language
    i18n.changeLanguage(value)
  }, [language])

  function switchLanguage() {
    setLanguage((currentLang) => (currentLang.value === 'ptBr' ? EN_US : PT_BR))
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, switchLanguage, SHORTCUT_KEY }}
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
