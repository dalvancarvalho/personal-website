/* MainSection/index.jsx */

import useAnimation from '../animations/useAnimation'

function MainSection(props) {
  // Section with fade-in animation

  const { children, className } = props
  const mainSectionRef = useAnimation()

  return (
    <section className={className} id="content" ref={mainSectionRef}>
      {children}
    </section>
  )
}

export default MainSection
