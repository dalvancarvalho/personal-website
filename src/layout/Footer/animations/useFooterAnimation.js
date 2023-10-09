/* useFooterAnimation.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useLocation } from 'react-router-dom'

function useFooterAnimation() {
  // Footer animation

  const { pathname } = useLocation()
  const footerRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current.children,
        { opacity: 0 },
        {
          opacity: 1,
          delay: 0.15,
          duration: 0.75,
          ease: 'power3.in',
          stagger: 0.1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom',
          },
        }
      )
    }, footerRef)

    // Context cleanup
    return () => ctx.revert()
  }, [pathname])

  return footerRef
}

export default useFooterAnimation
