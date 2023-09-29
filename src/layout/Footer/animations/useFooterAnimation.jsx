/* useFooterAnimation.jsx */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useFooterAnimation() {
  // Footer animation

  const footerRef = useRef(null)

  useLayoutEffect(() => {
    gsap.fromTo(
      footerRef.current.children,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.075,
        ease: 'power3.in',
        scrollTrigger: {
          trigger: footerRef.current,
        },
      }
    )
  }, [])

  return footerRef
}

export default useFooterAnimation
