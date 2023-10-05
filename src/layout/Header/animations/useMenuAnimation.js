/* useMenuAnimation.js */

import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import useIsFirstRender from '../../../hooks/useIsFirstRender'

function useMenuAnimation(buttonRef, isMenuOpen, menuRef) {
  // Menu animation

  const isFirstRender = useIsFirstRender()

  useLayoutEffect(() => {
    const switchAnimation = gsap.to(buttonRef.current, {
      y: '100%',
      duration: 0.5,
      ease: 'expo.inOut',
      paused: true,
    })

    if (isMenuOpen) {
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

    return () => switchAnimation.revert(0)
  }, [isMenuOpen])
}

export default useMenuAnimation
