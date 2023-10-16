/* useContactAnimation.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import useScreenProps from '../../../../hooks/useScreenProps'

function useContactAnimation() {
  // Contact section animation

  const { screenSize } = useScreenProps()
  const form = useRef(null)
  const scope = useRef(null)

  // GSAP properties
  const trigger = {
    trigger: form.current,
    start: 'bottom bottom',
  }
  const desktopFrom = {
    origin: 'center',
    scale: 0.8,
    visibility: 'hidden',
  }
  const desktopTo = {
    scale: 1,
    visibility: 'visible',
    duration: 1.75,
    ease: 'elastic.out(1.5, 0,5)',
    stagger: 0.1,
    scrollTrigger: trigger,
  }
  const mobileFrom = {
    opacity: 0,
    x: 32,
  }
  const mobileTo = {
    opacity: 1,
    x: 0,
    duration: 1.25,
    ease: 'power3.out',
    scrollTrigger: trigger,
  }

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const items = self.selector('.contact-paragraph')

      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 32 },
          {
            opacity: 1,
            x: 0,
            delay: 0.25,
            duration: 1.25,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'bottom bottom',
            },
          }
        )
      })

      // Form animation changes based on the screen size
      screenSize.lg
        ? gsap.fromTo(form.current.children, desktopFrom, desktopTo)
        : gsap.fromTo(form.current, mobileFrom, mobileTo)
    }, scope)

    // Context cleanup
    return () => ctx.revert()
  }, [screenSize.lg])

  return { form, scope }
}

export default useContactAnimation
