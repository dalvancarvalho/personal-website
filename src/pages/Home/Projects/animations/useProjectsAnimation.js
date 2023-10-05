/* useProjectsAnimation.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useProjectsAnimation() {
  // Projects section animation

  const paragraphRef = useRef(null)

  useLayoutEffect(() => {
    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, x: 32 },
      {
        opacity: 1,
        x: 0,
        duration: 1.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'bottom bottom',
        },
      }
    )
  }, [])

  return paragraphRef
}

export default useProjectsAnimation
