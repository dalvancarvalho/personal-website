/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

import useScreenProps from '../../../../hooks/useScreenProps'

export default function useAnimate(animate = true) {
  // Projects section animation

  const scope = useRef(null)
  const paragraph = useRef(null)
  const { screenSize } = useScreenProps()

  useLayoutEffect(() => {
    if (!animate) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        paragraph.current,
        { opacity: 0, scale: screenSize.md ? 1.15 : 1, x: screenSize.md ? 0 : 32 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1.25,
          ease: screenSize.md ? 'power4.inOut' : 'power4.out',
          scrollTrigger: {
            trigger: paragraph.current,
            start: 'bottom bottom',
          },
        }
      )
    }, scope)

    // Context cleanup
    return () => ctx.revert()
  }, [screenSize.md])

  return { scope, paragraph }
}
