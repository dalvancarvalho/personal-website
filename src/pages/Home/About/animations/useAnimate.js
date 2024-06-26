/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

import useScreenProps from '../../../../hooks/useScreenProps'

export default function useAnimate(animate = true) {
  // About section animation

  const { screenSize } = useScreenProps()
  const scope = useRef(null)
  const topics = useRef(null)
  const quotation = useRef(null)
  const stack = useRef(null)
  const stackImage = useRef(null)

  useLayoutEffect(() => {
    if (!animate) return

    const ctx = gsap.context((self) => {
      const paragraphs = self.selector('.about-paragraph')

      paragraphs.forEach((paragraph) => {
        gsap.fromTo(
          paragraph,
          { opacity: 0, x: screenSize.md ? 0 : 32, y: screenSize.md ? 32 : 0 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1.25,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: paragraph,
              start: 'bottom bottom',
            },
          }
        )
      })

      gsap.fromTo(
        stack.current.children,
        { opacity: 0, x: screenSize.md ? 0 : 32, y: screenSize.md ? 32 : 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.25,
          stagger: 0.125,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: stack.current,
            start: 'bottom bottom',
          },
        }
      )

      gsap.fromTo(
        quotation.current,
        { opacity: 0, x: screenSize.md ? 0 : 32, y: screenSize.md ? 32 : 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.25,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: topics.current,
            start: 'top 65%',
          },
        }
      )

      // 💻 displayed only in medium/large screens
      gsap.fromTo(
        stackImage.current,
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          delay: 0.75,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: stackImage.current,
            start: 'bottom bottom',
          },
        }
      )
    }, scope)

    // Context cleanup
    return () => ctx.revert()
  }, [screenSize.md])

  return { scope, topics, quotation, stack, stackImage }
}
