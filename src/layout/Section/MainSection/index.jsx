/* MainSection/index.jsx */

import useMainSectionAnimation from '../animations/useMainSectionAnimation'

function MainSection(props) {
  // Section with fade-in animation

  const { children, className } = props
  const mainSectionRef = useMainSectionAnimation()

  return (
    <section className={className} id="content" ref={mainSectionRef}>
      {children}
    </section>
  )
}

export default MainSection
