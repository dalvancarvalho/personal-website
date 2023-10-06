/* useDesktopAnimation.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useDesktopAnimation(isEven) {
  // Desktop card animation

  const image = useRef(null)
  const scope = useRef(null)
  const text = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        text.current,
        { x: isEven ? -48 : 48, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: image.current,
            start: 'bottom bottom',
          },
        }
      )

      gsap.fromTo(
        image.current,
        { x: isEven ? 48 : -48, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: image.current,
            start: 'bottom bottom',
          },
        }
      )
    }, scope)

    // Context cleanup
    return () => ctx.revert()
  }, [])

  return { image, scope, text }
}

export default useDesktopAnimation
