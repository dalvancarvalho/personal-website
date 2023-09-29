/* MainSection/index.jsx */

import useMainSectionAnimation from '../animations/useMainSectionAnimation'

function MainSection({ children, className }) {
  // Section with fade-in animation

  const mainSectionRef = useMainSectionAnimation()

  return (
    <section className={className} id="content" ref={mainSectionRef}>
      {children}
    </section>
  )
}

export default MainSection
