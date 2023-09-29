/* Section/index.jsx */

function Section({ children, className, id }) {
  // Regular section

  return (
    <section className={`py-[4.5rem] md:py-32 2xl:py-40 ${className}`} id={id}>
      {children}
    </section>
  )
}

export default Section
