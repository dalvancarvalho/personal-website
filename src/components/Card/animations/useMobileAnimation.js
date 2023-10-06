/* useMobileAnimation.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useMobileAnimation(isEven) {
  // Mobile card animation

  const cardRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          translate: isEven ? '15%' : '-15%',
        },
        {
          opacity: 1,
          translate: '0%',
          duration: 1,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: cardRef.current,
            start: '75% bottom',
          },
        }
      )
    }, cardRef)

    // Context cleanup
    return () => ctx.revert()
  }, [])

  return cardRef
}

export default useMobileAnimation
