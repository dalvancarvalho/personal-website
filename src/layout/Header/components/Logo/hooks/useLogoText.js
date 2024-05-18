/* useLogoText.js */

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import useLanguage from '../../../../../context/LanguageContext'

import { PT_BR, EN_US } from '../constants/logoText'

function useLogoText() {
  // Updates the logo based on the current pathname and language

  const { language } = useLanguage()
  const { pathname } = useLocation()
  const [logoText, setLogoText] = useState(
    language.value === 'ptBr' ? PT_BR[pathname] : EN_US[pathname]
  )

  useEffect(() => {
    // Sets a new logo text when the language or pathname are changed

    language.value === 'ptBr'
      ? setLogoText(PT_BR[pathname])
      : setLogoText(EN_US[pathname])
  }, [language, pathname])

  return logoText
}

export default useLogoText
