/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

import { useScreenProps } from '../../../../hooks/useScreenProps'

export function useAnimate(animate = true) {
  // Heading animation

  const scope = useRef(null)
  const heading = useRef(null)
  const sectionName = useRef(null)
  const { screenSize } = useScreenProps()

  useLayoutEffect(() => {
    if (!animate) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heading.current.children,
        { opacity: 0, x: screenSize.md ? 0 : 32, scale: screenSize.md ? 1.2 : 1 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          stagger: 0.125,
          duration: screenSize.md ? 0.5 : 1.25,
          ease: screenSize.md ? 'power3.in' : 'power4.out',
          scrollTrigger: {
            trigger: heading.current,
            start: 'bottom bottom',
          },
        }
      )

      // 💻 displayed only in medium/large screens
      gsap.fromTo(
        sectionName.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.55,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading.current,
            start: 'bottom bottom',
          },
        }
      )
    }, scope)

    // Context cleanup
    return () => ctx.revert()
  }, [screenSize.md])

  return { heading, scope, sectionName }
}
