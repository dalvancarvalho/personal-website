/* StackAnimation.jsx */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useStackAnimation() {
  // Stack-reveal animation used inside a card component

  const cardRef = useRef(null)
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
      stackAnimation.play()
      bgAnimation.play()
    }

    function hideStack() {
      stackAnimation.reverse()
      bgAnimation.reverse()
    }

    cardRef.current.addEventListener('mouseenter', revealStack)
    cardRef.current.addEventListener('mouseleave', hideStack)

    // Event listener cleanup
    return () => {
      cardRef.current.removeEventListener('mouseenter', revealStack)
      cardRef.current.removeEventListener('mouseleave', hideStack)
    }
  }, [])

  return { cardRef, stackRef }
}

export default useStackAnimation
