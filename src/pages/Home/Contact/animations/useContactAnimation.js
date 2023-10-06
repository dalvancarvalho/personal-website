/* useContactAnimation.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useContactAnimation() {
  // Contact section animation

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
        { opacity: 0, x: 32 },
        {
          opacity: 1,
          x: 0,
          duration: 1.25,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: form.current,
            start: 'center bottom',
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
