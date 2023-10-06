/* Section/index.jsx */

import { forwardRef } from 'react'

const Section = forwardRef(function Section(props, ref) {
  // Regular section

  const { children, className, id } = props

  return (
    <section className={`py-[4.5rem] md:py-32 2xl:py-40 ${className}`} id={id} ref={ref}>
      {children}
    </section>
  )
})

export default Section
