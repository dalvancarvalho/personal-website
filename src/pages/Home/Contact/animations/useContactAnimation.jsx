/* useContactAnimation.jsx */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useContactAnimation() {
  // Contact section animation

  const textRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const items = self.selector('.contact-item')
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 32 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'bottom bottom',
            },
          }
        )
      })
    }, textRef)

    return () => ctx.revert()
  }, [])

  return textRef
}

export default useContactAnimation
