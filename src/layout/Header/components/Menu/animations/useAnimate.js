/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

import useIsFirstRender from '../../../../../hooks/useIsFirstRender'

function useAnimate(refs, isMenuOpen) {
  // Menu animation

  const { button, menu } = refs

  const isFirstRender = useIsFirstRender()
  const scope = useRef(null)

  useLayoutEffect(() => {
    // Button animation
    const switchAnimation = gsap.to(button.current, {
      y: '100%',
      duration: 0.5,
      ease: 'expo.inOut',
      paused: true,
    })

    // Menu animation
    const ctx = gsap.context(() => {
      if (isMenuOpen) {
        gsap.to(menu.current.children, {
          x: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'expo.out',
        })
        switchAnimation.play()
      } else {
        gsap.to(menu.current.children, {
          x: '-100%',
          duration: 0.5,
          stagger: 0.05,
          ease: 'expo.out',
        })
        if (isFirstRender) return
        switchAnimation.reverse(0)
      }
    }, scope)

    // Context cleanup
    return () => {
      switchAnimation.revert()
      ctx.kill()
    }
  }, [isMenuOpen])

  return { scope }
}

export default useAnimate
