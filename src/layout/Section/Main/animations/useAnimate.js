/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function useAnimate() {
  // Fade-in animation on main section

  const scope = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        scope.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: 'power3.in' }
      )
    }, scope)

    // Context cleanup
    return () => ctx.revert()
  }, [])

  return { scope }
}
