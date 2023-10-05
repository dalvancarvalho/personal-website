/* useDividerAnimation.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useDividerAnimation() {
  // Divider animation

  const dividerRef = useRef(null)

  useLayoutEffect(() => {
    // (the elements are targeted through 'refs' in order to trigger the
    // animations individually when more than one divider is rendered)

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
  }, [])

  return dividerRef
}

export default useDividerAnimation
