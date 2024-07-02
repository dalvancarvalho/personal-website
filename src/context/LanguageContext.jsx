/* LanguageContext.jsx */

import { createContext, useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { useKeyPress } from '../hooks/useKeyPress'
import { useLocalStorage } from '../hooks/useLocalStorage'

import { enUs, ptBr, SHORTCUT_KEY } from '../constants/languages'

// Context for the internationalization functionality
const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const clientLang = navigator?.languages[0] // Browser's preferred language
  const initialLang = clientLang === 'pt-BR' || clientLang === 'pt' ? ptBr : enUs

  const [language, setLanguage] = useLocalStorage('preferred-language', initialLang)
  const { i18n } = useTranslation()
  useKeyPress(SHORTCUT_KEY, switchLanguage)

  useEffect(() => {
    // Changes the language of the page and its title

    const { value } = language
    i18n.changeLanguage(value)
  }, [language])

  function switchLanguage() {
    setLanguage((currentLang) => (currentLang.value === 'ptBr' ? enUs : ptBr))
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, switchLanguage, SHORTCUT_KEY }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  // Sets the language of the page

  return useContext(LanguageContext)
}
