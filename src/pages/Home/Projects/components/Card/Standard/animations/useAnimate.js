/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function useAnimate(animate = true) {
  // Standard card animation

  const scope = useRef(null)
  const image = useRef(null)
  const stack = useRef(null)
  const text = useRef(null)

  useLayoutEffect(() => {
    if (!animate) return

    const ctx = gsap.context(() => {
      // Scoped tweens (removed when the component unmounts)

      //Initial animation
      gsap.fromTo(
        text.current,
        { opacity: 0, scale: 1.15 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: scope.current,
            start: 'bottom bottom',
          },
        }
      )

      gsap.fromTo(
        image.current,
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: scope.current,
            start: 'bottom bottom',
          },
        }
      )
    }, scope)

    // Stack-reveal animation (on element's hover)
    const stackAnimation = gsap.to(stack.current.children, {
      x: 0,
      pointerEvents: 'all',
      duration: 0.4,
      stagger: 0.05,
      ease: 'power3.inOut',
      paused: true,
    })

    function revealStack() {
      stackAnimation.play()
    }

    function hideStack() {
      stackAnimation.reverse()
    }

    image.current.addEventListener('mouseenter', revealStack)
    image.current.addEventListener('mouseleave', hideStack)

    // Context/event listeners cleanup
    return () => {
      ctx.revert()
      stackAnimation.revert()
      image.current.removeEventListener('mouseenter', revealStack)
      image.current.removeEventListener('mouseleave', hideStack)
    }
  }, [])

  return { image, scope, stack, text }
}
