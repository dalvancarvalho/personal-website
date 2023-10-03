/* useProjectsAnimation.jsx */

import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'

function useProjectsAnimation() {
  // Projects section animation

  useLayoutEffect(() => {
    gsap.fromTo(
      '.projects-paragraph',
      { opacity: 0, x: 32 },
      {
        opacity: 1,
        x: 0,
        duration: 1.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-paragraph',
          start: 'bottom bottom',
        },
      }
    )
  }, [])
}

export default useProjectsAnimation
