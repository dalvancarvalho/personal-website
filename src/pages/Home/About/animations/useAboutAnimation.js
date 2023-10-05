/* useAboutAnimation.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import useScreenProps from '../../../../hooks/useScreenProps'

function useAboutAnimation() {
  // About section animation

  const { screenSize } = useScreenProps()
  const image = useRef(null)
  const quotation = useRef(null)
  const selfie = useRef(null)
  const stack = useRef(null)
  const topics = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const paragraphs = self.selector('.about-paragraph')

      paragraphs.forEach((paragraph) => {
        gsap.fromTo(
          paragraph,
          { opacity: 0, x: 32 },
          {
            opacity: 1,
            x: 0,
            duration: 1.25,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: paragraph,
              start: 'bottom bottom',
            },
          }
        )
      })
    }, topics)

    gsap.fromTo(
      stack.current.children,
      { opacity: 0, x: 32 },
      {
        opacity: 1,
        x: 0,
        duration: 1.25,
        stagger: 0.125,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: stack.current,
          start: 'bottom bottom',
        },
      }
    )

    gsap.fromTo(
      selfie.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power3.in',
        scrollTrigger: {
          trigger: screenSize.md ? topics.current : selfie.current,
          start: 'top 65%',
        },
      }
    )

    gsap.fromTo(
      quotation.current,
      { opacity: 0, x: 32 },
      {
        opacity: 1,
        x: 0,
        duration: 1.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: topics.current,
          start: 'top 65%',
        },
      }
    )

    gsap.fromTo(
      image.current,
      { opacity: 0, x: -32 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: image.current,
          start: 'bottom bottom',
        },
      }
    )

    // Context cleanup
    return () => ctx.revert()
  }, [])

  return { image, quotation, selfie, stack, topics }
}

export default useAboutAnimation
