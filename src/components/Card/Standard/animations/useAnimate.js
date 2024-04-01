/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useAnimate() {
  // Desktop card animation

  const scope = useRef(null)
  const image = useRef(null)
  const stack = useRef(null)
  const text = useRef(null)

  useLayoutEffect(() => {
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
    const bgAnimation = gsap.to(stack.current, {
      opacity: 1,
      duration: 0.8,
      ease: 'power3.inOut',
      paused: true,
    })

    const stackAnimation = gsap.to(stack.current.children, {
      x: 0,
      pointerEvents: 'all',
      duration: 0.4,
      stagger: 0.05,
      ease: 'power3.inOut',
      paused: true,
    })

    function revealStack() {
      bgAnimation.play()
      stackAnimation.play()
    }

    function hideStack() {
      bgAnimation.reverse()
      stackAnimation.reverse()
    }

    image.current.addEventListener('mouseenter', revealStack)
    image.current.addEventListener('mouseleave', hideStack)

    // Context/event listeners cleanup
    return () => {
      ctx.revert()
      bgAnimation.revert()
      stackAnimation.revert()
      image.current.removeEventListener('mouseenter', revealStack)
      image.current.removeEventListener('mouseleave', hideStack)
    }
  }, [])

  return { image, scope, stack, text }
}

export default useAnimate
