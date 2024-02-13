/* useAnimation.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

import useIsFirstRender from '../../../../hooks/useIsFirstRender'

function useAnimation(buttonRef, isMenuOpen, menuRef) {
  // Menu animation

  const isFirstRender = useIsFirstRender()
  const scopeRef = useRef(null)

  useLayoutEffect(() => {
    const switchAnimation = gsap.to(buttonRef.current, {
      // Button animation
      y: '100%',
      duration: 0.5,
      ease: 'expo.inOut',
      paused: true,
    })

    gsap.context(() => {
      if (isMenuOpen) {
        // Menu animation
        gsap.to(menuRef.current.children, {
          x: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'expo.out',
        })
        switchAnimation.play()
      } else {
        gsap.to(menuRef.current.children, {
          x: '-100%',
          duration: 0.5,
          stagger: 0.05,
          ease: 'expo.out',
        })
        if (isFirstRender) return
        switchAnimation.reverse(0)
      }
    }, scopeRef)

    // Cleanup
    return () => switchAnimation.revert()
  }, [isMenuOpen])

  return scopeRef
}

export default useAnimation
