/* useLogoText.js */

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import useLanguage from '../../../../../context/LanguageContext'

import { enUS, ptBR } from '../constants/logoText'

function useLogoText() {
  // Updates the logo based on the current pathname and language

  const { language } = useLanguage()
  const { pathname } = useLocation()
  const [logoText, setLogoText] = useState(
    language.value === 'ptBR' ? ptBR[pathname] : enUS[pathname]
  )

  useEffect(() => {
    // Sets a new logo text when the language or pathname are changed

    language.value === 'ptBR' ? setLogoText(ptBR[pathname]) : setLogoText(enUS[pathname])
  }, [language, pathname])

  return logoText
}

export default useLogoText
