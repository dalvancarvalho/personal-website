/* useSectionTitleAnimation.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useSectionTitleAnimation(animation, watermarkText) {
  // Heading animation

  const heading = useRef(null)
  const watermark = useRef(null)

  useLayoutEffect(() => {
    // (the elements are targeted through 'refs' in order to trigger the
    // animations individually when more than one heading is rendered)

    if (!animation) return

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
  }, [])

  return { heading, watermark }
}

export default useSectionTitleAnimation
