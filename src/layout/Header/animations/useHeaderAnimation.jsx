/* useHeaderAnimation.jsx */

import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'

function useHeaderAnimation() {
  // Header animation

  useLayoutEffect(() => {
    gsap.fromTo(
      '.header-elements',
      { opacity: 0, pointerEvents: 'none' },
      {
        opacity: 1,
        pointerEvents: 'all',
        duration: 0.75,
        delay: 3,
        ease: 'power3.in',
      }
    )
  }, [])
}

export default useHeaderAnimation
