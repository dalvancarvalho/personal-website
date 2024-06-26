/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

import useScreenProps from '../../../hooks/useScreenProps'

export default function useAnimate(animate = true) {
  // Divider animation

  const scope = useRef(null)
  const { screenSize } = useScreenProps()

  useLayoutEffect(() => {
    if (!animate) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        scope.current,
        { opacity: 0, rotateY: '240deg', scale: 0.5 },
        {
          opacity: 1,
          rotateY: '360deg',
          scale: 1,
          delay: 0.5,
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
