/* Section/index.jsx */

import { forwardRef } from 'react'
import { useLocation } from 'react-router-dom'

const Section = forwardRef(function Section({ children, className = '', id }, ref) {
  // Regular section

  const { pathname } = useLocation()

  return (
    <section
      className={`${className} ${
        pathname === '/' ? 'py-[4.5rem] md:py-32' : 'py-9 md:py-16'
      }`}
      id={id}
      ref={ref}
    >
      {children}
    </section>
  )
})

export default Section
