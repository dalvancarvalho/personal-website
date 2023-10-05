/* useStackAnimation.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useStackAnimation(targetRef) {
  // Stack-reveal animation used inside a card component

  const stackRef = useRef(null)

  useLayoutEffect(() => {
    const bgAnimation = gsap.to(stackRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: 'power3.inOut',
      paused: true,
    })

    const stackAnimation = gsap.to(stackRef.current.children, {
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

    targetRef.current.addEventListener('mouseenter', revealStack)
    targetRef.current.addEventListener('mouseleave', hideStack)

    // Event listener cleanup
    return () => {
      targetRef.current.removeEventListener('mouseenter', revealStack)
      targetRef.current.removeEventListener('mouseleave', hideStack)
      bgAnimation.revert()
      stackAnimation.revert()
    }
  }, [])

  return stackRef
}

export default useStackAnimation
