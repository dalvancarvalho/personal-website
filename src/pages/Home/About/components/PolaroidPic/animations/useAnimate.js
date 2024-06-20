/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

import useScreenProps from '../../../../../../hooks/useScreenProps'

export default function useAnimate(animate = true) {
  // Polaroid picture animation

  const { screenSize } = useScreenProps()
  const scope = useRef(null)
  const picture = useRef(null)
  const shadow = useRef(null)

  useLayoutEffect(() => {
    if (!animate) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        picture.current,
        { opacity: 0, scale: 1.25 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.75,
          ease: 'power4.in',
          scrollTrigger: {
            trigger: picture.current,
            start: 'top 65%',
          },
        }
      )

      gsap.fromTo(
        shadow.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.75,
          ease: 'power4.in',
          scrollTrigger: {
            trigger: picture.current,
            start: 'top 65%',
          },
        }
      )
    }, scope)

    // Context cleanup
    return () => ctx.revert()
  }, [screenSize.lg])

  return { scope, picture, shadow }
}
