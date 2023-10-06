/* useMainSectionAnimation.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useMainSectionAnimation() {
  // Fade-in animation

  const mainSectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        mainSectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: 'power3.in' }
      )
    }, mainSectionRef)

    // Context cleanup
    return () => ctx.revert()
  }, [])

  return mainSectionRef
}

export default useMainSectionAnimation
