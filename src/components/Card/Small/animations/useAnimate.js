/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useAnimate(isEven) {
  // Mobile card animation

  const card = useRef(null)
  const stack = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Scoped tween (removed when the component unmounts)

      //Initial animation
      gsap.fromTo(
        card.current,
        {
          opacity: 0,
          translate: isEven ? '15%' : '-15%',
        },
        {
          opacity: 1,
          translate: '0%',
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: card.current,
            start: '75% bottom',
          },
        }
      )
    }, card)

    // Stack-reveal animation (on element's hover)
    const bgAnimation = gsap.to(stack.current, {
      opacity: 1,
      duration: 0.8,
      ease: 'power4.out',
      paused: true,
    })

    const stackAnimation = gsap.to(stack.current.children, {
      x: 0,
      pointerEvents: 'all',
      duration: 0.4,
      stagger: 0.05,
      ease: 'power4.out',
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

    card.current.addEventListener('mouseenter', revealStack)
    card.current.addEventListener('mouseleave', hideStack)

    // Context/event listeners cleanup
    return () => {
      ctx.revert()
      bgAnimation.revert()
      stackAnimation.revert()
      card.current.removeEventListener('mouseenter', revealStack)
      card.current.removeEventListener('mouseleave', hideStack)
    }
  }, [])

  return { card, stack }
}

export default useAnimate
