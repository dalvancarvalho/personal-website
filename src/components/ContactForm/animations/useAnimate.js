/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

import useScreenProps from '../../../hooks/useScreenProps'

export default function useAnimate(animate = true) {
  // Contact form animation

  const { screenSize } = useScreenProps()
  const scope = useRef(null)

  useLayoutEffect(() => {
    if (!animate) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        scope.current.children,
        { opacity: 0, x: screenSize.md ? 0 : 32, y: screenSize.md ? 32 : 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          stagger: 0.125,
          duration: 1.25,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: scope.current,
            start: 'bottom bottom',
          },
        }
      )
    }, scope)

    // Context cleanup
    return () => ctx.revert()
  }, [screenSize.md])

  return { scope }
}
