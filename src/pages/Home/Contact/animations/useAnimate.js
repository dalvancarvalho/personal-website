/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

import { useScreenProps } from '../../../../hooks/useScreenProps'

export function useAnimate(animate = true) {
  // Contact section animation

  const { screenSize } = useScreenProps()
  const scope = useRef(null)
  const contacts = useRef(null)

  useLayoutEffect(() => {
    if (!animate) return

    const ctx = gsap.context((self) => {
      const paragraphs = self.selector('.contact-paragraph')

      paragraphs.forEach((paragraph) => {
        gsap.fromTo(
          paragraph,
          { opacity: 0, x: 32 },
          {
            opacity: 1,
            x: 0,
            duration: 1.25,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: paragraph,
              start: 'bottom bottom',
            },
          }
        )
      })

      gsap.fromTo(
        contacts.current.children,
        { opacity: 0, x: 32 },
        {
          opacity: 1,
          x: 0,
          duration: 1.25,
          stagger: 0.125,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: contacts.current,
            start: 'bottom bottom',
          },
        }
      )
    }, scope)

    // Context cleanup
    return () => ctx.revert()
  }, [screenSize.md])

  return { scope, contacts }
}
