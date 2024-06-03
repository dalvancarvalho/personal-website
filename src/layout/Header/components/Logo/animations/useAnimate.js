/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

import useIsFirstRender from '../../../../../hooks/useIsFirstRender'
import useLogoText from '../hooks/useLogoText'

export default function useAnimate() {
  // Logo text animation

  const isFirstRender = useIsFirstRender()
  const logoText = useLogoText()
  const tl = useRef(null)
  const scope = useRef(null)
  const cursor = useRef(null)
  const text = useRef(null)

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
    // Erases the current text and writes a new one whenever the 'logoText' value changes

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
