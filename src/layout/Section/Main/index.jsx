/* MainSection/index.jsx */

import useAnimate from './animations/useAnimate'

export default function MainSection({ children, className = '' }) {
  // Section with fade-in animation

  const animation = useAnimate()

  return (
    <section className={className} id="content" ref={animation.scope}>
      {children}
    </section>
  )
}
