/* useDesktopAnimation.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useDesktopAnimation(isEven) {
  // Desktop card animation

  const image = useRef(null)
  const text = useRef(null)

  useLayoutEffect(() => {
    // (the elements are targeted through 'refs' in order to trigger the
    // animations individually when more than one card is rendered)

    gsap.fromTo(
      text.current,
      { x: isEven ? -48 : 48, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: image.current,
          start: 'bottom bottom',
        },
      }
    )

    gsap.fromTo(
      image.current,
      { x: isEven ? 48 : -48, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: image.current,
          start: 'bottom bottom',
        },
      }
    )
  }, [])

  return { image, text }
}

export default useDesktopAnimation
