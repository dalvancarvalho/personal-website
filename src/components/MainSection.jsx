/* MainSection.jsx */

import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'

function MainSection({ children, className }) {
  // Section with fade-in animation

  useLayoutEffect(() => {
    gsap.fromTo(
      '.section',
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: 'power3.in' }
    )
  }, [])

  return <section className={`section ${className}`}>{children}</section>
}

export default MainSection
