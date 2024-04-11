/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

import useScreenProps from '../../../hooks/useScreenProps'

function useAnimate() {
  // Contact form animation

  const { screenSize } = useScreenProps()
  const scope = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        scope.current.children,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.125,
          duration: 1.25,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: scope.current,
            start: 'bottom bottom',
          },
        }
      )
    }, scope)

    // Context cleanup
    return () => ctx.revert()
  }, [screenSize.lg])

  return { scope }
}

export default useAnimate
