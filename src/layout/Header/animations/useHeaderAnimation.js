/* useHeaderAnimation.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useHeaderAnimation(pathname) {
  // Header animation

  const nav = useRef(null)
  const scope = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        nav.current,
        { opacity: 0, pointerEvents: 'none' },
        {
          opacity: 1,
          pointerEvents: 'all',
          duration: 0.75,
          delay: pathname === '/' ? 3 : 0,
          ease: 'power3.in',
        }
      )
    }, scope)

    // Context cleanup
    return () => ctx.revert()
  }, [])

  return { nav, scope }
}

export default useHeaderAnimation
