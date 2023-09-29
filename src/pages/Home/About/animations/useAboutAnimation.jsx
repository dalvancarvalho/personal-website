/* useAboutAnimation.jsx */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import useScreenProps from '../../../../hooks/useScreenProps'

function useAboutAnimation() {
  // About section animation

  const { screenSize } = useScreenProps()
  const stackRef = useRef(null)
  const topicsRef = useRef(null)

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
    }, topicsRef)

    gsap.fromTo(
      stackRef.current.children,
      { opacity: 0, x: 32 },
      {
        opacity: 1,
        x: 0,
        duration: 1.25,
        stagger: 0.125,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: stackRef.current,
          start: 'bottom bottom',
        },
      }
    )

    gsap.fromTo(
      '.about-selfie',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power3.in',
        scrollTrigger: {
          trigger: screenSize.md ? topicsRef.current : '.about-selfie',
          start: 'top 65%',
        },
      }
    )

    gsap.fromTo(
      '.about-quotation',
      { opacity: 0, x: 32 },
      {
        opacity: 1,
        x: 0,
        duration: 1.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: topicsRef.current,
          start: 'top 65%',
        },
      }
    )

    gsap.fromTo(
      '.about-stack',
      { opacity: 0, x: -32 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-stack',
          start: 'bottom bottom',
        },
      }
    )

    // Context cleanup
    return () => ctx.revert()
  }, [])

  return { stackRef, topicsRef }
}

export default useAboutAnimation
