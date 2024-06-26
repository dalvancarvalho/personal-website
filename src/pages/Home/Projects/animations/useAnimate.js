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
        { opacity: 0, x: screenSize.md ? 0 : 32, y: screenSize.md ? 32 : 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.25,
          ease: 'power4.out',
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
