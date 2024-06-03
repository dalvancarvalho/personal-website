/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

import useScreenProps from '../../../../hooks/useScreenProps'

export default function useAnimate(animation) {
  // Heading animation

  const scope = useRef(null)
  const heading = useRef(null)
  const watermark = useRef(null)
  const { screenSize } = useScreenProps()

  useLayoutEffect(() => {
    if (!animation) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heading.current,
        { opacity: 0, scale: 1.2 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'power3.in',
          scrollTrigger: {
            trigger: heading.current,
            start: 'bottom bottom',
          },
        }
      )

      gsap.fromTo(
        watermark.current,
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

  return { heading, scope, watermark }
}
