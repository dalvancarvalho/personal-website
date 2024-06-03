/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function useAnimate(pathname) {
  // Header animation

  const scope = useRef(null)
  const nav = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        nav.current,
        { opacity: 0, pointerEvents: 'none' },
        {
          opacity: 1,
          pointerEvents: 'all',
          duration: pathname === '/' ? 0.75 : 1.6,
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
