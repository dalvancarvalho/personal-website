/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function useAnimate(index, animate = true) {
  // Mobile card animation

  const isEven = index % 2 === 0 ? true : false

  const scope = useRef(null)

  useLayoutEffect(() => {
    if (!animate) return

    const ctx = gsap.context(() => {
      //Initial animation
      gsap.fromTo(
        scope.current,
        {
          opacity: 0,
          translate: isEven ? '15%' : '-15%',
        },
        {
          opacity: 1,
          translate: '0%',
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: scope.current,
            start: '75% bottom',
          },
        }
      )
    }, scope)

    // Context/event listeners cleanup
    return () => ctx.revert()
  }, [])

  return { scope }
}
