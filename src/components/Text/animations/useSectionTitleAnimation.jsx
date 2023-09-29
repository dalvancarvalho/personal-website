/* useSectionTitleAnimation.jsx */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useSectionTitleAnimation(animation, watermark) {
  // Heading animation

  const headingRef = useRef(null)
  const watermarkRef = useRef(null)

  useLayoutEffect(() => {
    // (the elements are targeted through 'refs' in order to trigger the
    // animations individually when more than one heading is rendered)

    if (!animation) return

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, scale: 1.2 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power3.in',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'bottom bottom',
        },
      }
    )

    watermark &&
      gsap.fromTo(
        watermarkRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.55,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'bottom bottom',
          },
        }
      )
  }, [])

  return { headingRef, watermarkRef }
}

export default useSectionTitleAnimation
