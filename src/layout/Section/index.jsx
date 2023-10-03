/* Section/index.jsx */

function Section(props) {
  // Regular section

  const { children, className, id } = props

  return (
    <section className={`py-[4.5rem] md:py-32 2xl:py-40 ${className}`} id={id}>
      {children}
    </section>
  )
}

export default Section
