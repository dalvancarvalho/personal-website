/* useHeroAnimation.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useHeroAnimation(bgRef, textRef) {
  // Hero section animation

  const tl = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .fromTo(
          bgRef.current,
          { opacity: 0, scale: 1.4, visibility: 'hidden' },
          {
            opacity: 1,
            scale: 1,
            visibility: 'visible',
            delay: 2.25,
            duration: 1,
            ease: 'circ.out',
          }
        )
        .fromTo(
          textRef.current.children,
          { opacity: 0, scale: 1.2, y: 32 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 2,
            ease: 'elastic.out(1, 0.6)',
            stagger: 0.15,
          },
          '-=0.7'
        )
    })

    // Context cleanup
    return () => ctx.revert()
  }, [])
}

export default useHeroAnimation
