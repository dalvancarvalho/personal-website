/* useCardMobileAnimation.jsx */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useCardMobileAnimation(isEven) {
  // Mobile card animation

  const cardRef = useRef(null)

  useLayoutEffect(() => {
    // (the elements are targeted through 'refs' in order to trigger the
    // animations individually when more than one card is rendered)

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
  }, [])

  return cardRef
}

export default useCardMobileAnimation
