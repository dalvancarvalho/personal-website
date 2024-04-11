/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useTranslation } from 'react-i18next'

import useLanguage from '../../../../../../context/LanguageContext'
import useScreenProps from '../../../../../../hooks/useScreenProps'

function useAnimate() {
  // Polaroid picture animation

  const { t } = useTranslation()
  const { screenSize } = useScreenProps()
  const language = useLanguage()
  const tl = useRef(null)
  const scope = useRef(null)
  const text = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: scope.current,
            start: 'top 65%',
          },
        })
        .fromTo(
          scope.current,
          { opacity: 0, scale: 1.25 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.75,
            ease: 'power4.in',
          }
        )
        .to(text.current, {
          text: { value: t('pages.home.about.polaroid'), speed: 1.5 },
          ease: 'none',
        })
    }, scope)

    // Context cleanup
    return () => ctx.revert()
  }, [language, screenSize.lg])

  return { scope, text }
}

export default useAnimate
