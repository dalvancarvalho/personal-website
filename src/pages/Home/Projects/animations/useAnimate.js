/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

import useScreenProps from '../../../../hooks/useScreenProps'

function useAnimate() {
  // Projects section animation

  const scope = useRef(null)
  const paragraph = useRef(null)
  const { screenSize } = useScreenProps()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        paragraph.current,
        { opacity: 0, x: 32 },
        {
          opacity: 1,
          x: 0,
          duration: 1.25,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: paragraph.current,
            start: 'bottom bottom',
          },
        }
      )
    }, scope)

    // Context cleanup
    return () => ctx.revert()
  }, [screenSize.md])

  return { scope, paragraph }
}

export default useAnimate
