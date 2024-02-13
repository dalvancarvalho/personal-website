/* useAnimation.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useAnimation() {
  // Projects section animation

  const paragraph = useRef(null)
  const scope = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        paragraph.current,
        { opacity: 0, x: 32 },
        {
          opacity: 1,
          x: 0,
          duration: 1.25,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: paragraph.current,
            start: 'bottom bottom',
          },
        }
      )
    }, scope)

    // Context cleanup
    return () => ctx.revert()
  }, [])

  return { scope, paragraph }
}

export default useAnimation
