/* MainSection/index.jsx */

import useAnimate from './animations/useAnimate'

function MainSection(props) {
  // Section with fade-in animation

  const { children, className = '' } = props

  const animation = useAnimate()

  return (
    <section className={className} id="content" ref={animation.scope}>
      {children}
    </section>
  )
}

export default MainSection
