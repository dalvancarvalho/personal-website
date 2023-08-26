/* SectionTitle.jsx */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function SectionTitle({
  children,
  noAnimation,
  watermark,
  watermarkColor = 'text-slate-150 dark:text-dark-2',
}) {
  // Displays the title of the section (H2)

  const headingRef = useRef(null)
  const watermarkRef = useRef(null)

  useLayoutEffect(() => {
    // Heading animation.
    // (the elements are targeted through 'refs' in order to trigger the
    // animations individually when more than one heading is rendered)

    if (noAnimation) return

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, scale: 1.2 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power3.in',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'bottom bottom',
        },
      }
    )

    watermark &&
      gsap.fromTo(
        watermarkRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.55,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'bottom bottom',
          },
        }
      )
  }, [])

  return (
    <div
      className="relative isolate mb-10 md:mb-24 2xl:mb-28 w-full flex
      justify-start md:justify-center title-font text-3xl md:text-[2.5rem]
      2xl:text-[2.75rem]"
    >
      <h2 className="whitespace-nowrap" ref={headingRef}>
        {children}
      </h2>
      {watermark && (
        <span
          className={`hidden -z-10 absolute translate-x-[0.125em] md:block
          lg:translate-x-[0.2em] text-[2.5em] uppercase ${watermarkColor}
          tracking-[0.25em] lg:tracking-[0.4em] select-none color-transition`}
          ref={watermarkRef}
        >
          {watermark}
        </span>
      )}
    </div>
  )
}

export default SectionTitle
