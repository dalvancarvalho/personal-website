/* useDividerAnimation.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useDividerAnimation() {
  // Divider animation

  const dividerRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        dividerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          delay: 0.5,
          duration: 1.25,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: dividerRef.current,
            start: 'bottom bottom',
          },
        }
      )
    }, dividerRef)

    // Context cleanup
    return () => ctx.revert()
  }, [])

  return dividerRef
}

export default useDividerAnimation
