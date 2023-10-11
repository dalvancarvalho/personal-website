/* useContactAnimation.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import useScreenProps from '../../../../hooks/useScreenProps'

function useContactAnimation() {
  // Contact section animation

  const { isPortraitMode } = useScreenProps()
  const form = useRef(null)
  const scope = useRef(null)

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
        form.current.children,
        { opacity: 0, y: -64 },
        {
          opacity: 1,
          y: 0,
          delay: isPortraitMode ? 0.5 : 0,
          duration: 1.25,
          ease: 'elastic.out(1.2, 0.5)',
          stagger: -0.1,
          scrollTrigger: {
            trigger: form.current,
            start: 'bottom bottom',
          },
        }
      )
    }, scope)

    // Context cleanup
    return () => ctx.revert()
  }, [])

  return { form, scope }
}

export default useContactAnimation
