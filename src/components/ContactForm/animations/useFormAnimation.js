/* useFormAnimation.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function useFormAnimation() {
  // Contact form animation

  const formRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const formItems = self.selector('.form-element')
      formItems.forEach((item) => {
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
    }, formRef)

    return () => ctx.revert()
  }, [])

  return formRef
}

export default useFormAnimation
