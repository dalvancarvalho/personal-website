/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

import useScreenProps from '../../../../hooks/useScreenProps'

function useAnimate() {
  // Contact section animation

  const { screenSize } = useScreenProps()
  const scope = useRef(null)
  const form = useRef(null)

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

      gsap.fromTo(
        form.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          delay: 0.25,
          duration: 1.25,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: form.current,
            start: 'bottom bottom',
          },
        }
      )
    }, scope)

    // Context cleanup
    return () => ctx.revert()
  }, [screenSize.lg])

  return { form, scope }
}

export default useAnimate
