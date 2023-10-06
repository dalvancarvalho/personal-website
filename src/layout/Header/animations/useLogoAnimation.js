/* useLogoAnimation.js */

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useLocation } from 'react-router-dom'
import useLanguage from '../../../context/LanguageContext'
import useIsFirstRender from '../../../hooks/useIsFirstRender'
import { enUS, ptBR } from '../../../constants/logoText'

function useLogoAnimation() {
  // Updates the logo based on the current pathname and language

  const { language } = useLanguage()
  const { pathname } = useLocation()
  const isFirstRender = useIsFirstRender()
  const cursor = useRef(null)
  const scope = useRef(null)
  const text = useRef(null)
  const tl = useRef(null)
  const [logoText, setLogoText] = useState(
    language.value === 'ptBR' ? ptBR[pathname] : enUS[pathname]
  )

  useEffect(() => {
    // Sets a new logo text when the language or pathname are changed

    language.value === 'ptBR' ? setLogoText(ptBR[pathname]) : setLogoText(enUS[pathname])
  }, [language, pathname])

  // Animations
  useLayoutEffect(() => {
    // Shows the logo text after the component is mounted (initial animation)

    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(cursor.current, {
          duration: 0.5,
          opacity: 1,
          delay: 0.5,
          repeat: 6,
          ease: 'power3.inOut',
        })
        .to(text.current, { text: { value: logoText, speed: 1 }, ease: 'none' }, '-=2.25')
    }, scope)

    // Context cleanup
    return () => ctx.kill()
  }, [])

  useLayoutEffect(() => {
    // Erases the current text and writes a new one based on the new pathname and language

    if (isFirstRender) return

    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(text.current, { text: { value: '', speed: 2 }, ease: 'none' })
        .to(text.current, {
          text: { value: logoText, speed: 1 },
          ease: 'none',
        })
        .fromTo(
          cursor.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            repeat: 5,
            ease: 'power3.inOut',
          },
          '-=1'
        )
    }, scope)

    // Context cleanup
    return () => ctx.kill()
  }, [logoText])

  return { cursor, scope, text }
}

export default useLogoAnimation
