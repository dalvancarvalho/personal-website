/* Section/index.jsx */

import { forwardRef } from 'react'

const Section = forwardRef(function Section({ children, className = '', id }, ref) {
  // Regular section

  return (
    <section className={`${className} py-[4.5rem] md:py-32`} id={id} ref={ref}>
      {children}
    </section>
  )
})

export default Section
