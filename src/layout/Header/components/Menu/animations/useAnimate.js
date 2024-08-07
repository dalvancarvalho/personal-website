/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function useAnimate(menuRef, isMenuOpen, animate = true) {
  // Menu animation

  const scope = useRef(null)

  useLayoutEffect(() => {
    if (!animate) return

    const ctx = gsap.context(() => {
      if (isMenuOpen) {
        gsap.to(menuRef.current.children, {
          x: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'expo.out',
        })
      } else {
        gsap.to(menuRef.current.children, {
          x: '-100%',
          duration: 0.5,
          stagger: 0.05,
          ease: 'expo.out',
        })
      }
    }, scope)

    // Context cleanup
    return () => ctx.kill()
  }, [isMenuOpen])

  return { scope }
}
