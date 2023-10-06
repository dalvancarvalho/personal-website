/* useSectionTitleAnimation.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useSectionTitleAnimation(animation, watermarkText) {
  // Heading animation

  const heading = useRef(null)
  const scope = useRef(null)
  const watermark = useRef(null)

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

      watermarkText &&
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
  }, [])

  return { heading, scope, watermark }
}

export default useSectionTitleAnimation
