/* useHeaderAnimation.jsx */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useHeaderAnimation(pathname) {
  // Header animation

  const headerRef = useRef(null)

  useLayoutEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, pointerEvents: 'none' },
      {
        opacity: 1,
        pointerEvents: 'all',
        duration: 0.75,
        delay: pathname === '/' ? 3 : 0,
        ease: 'power3.in',
      }
    )
  }, [])

  return headerRef
}

export default useHeaderAnimation
