/* useCardAnimation.jsx */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useCardAnimation(isEven) {
  // Desktop card animation

  const imageRef = useRef(null)
  const textRef = useRef(null)

  useLayoutEffect(() => {
    // (the elements are targeted through 'refs' in order to trigger the
    // animations individually when more than one card is rendered)

    gsap.fromTo(
      textRef.current,
      { x: isEven ? -48 : 48, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'bottom bottom',
        },
      }
    )

    gsap.fromTo(
      imageRef.current,
      { x: isEven ? 48 : -48, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'bottom bottom',
        },
      }
    )
  }, [])

  return { imageRef, textRef }
}

export default useCardAnimation
