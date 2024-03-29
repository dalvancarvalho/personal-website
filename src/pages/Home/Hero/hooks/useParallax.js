/* useParallax.js */

import { useParallax } from 'react-scroll-parallax'

function useHeroParallax() {
  // Hero section parallax effect

  const { ref: bgRef } = useParallax({
    opacity: [1, -0.5],
    shouldAlwaysCompleteAnimation: true,
    translateY: [0, 70],
  })

  const { ref: textRef } = useParallax({
    opacity: [1, -0.25],
    scale: [1, 0.75],
    shouldAlwaysCompleteAnimation: true,
  })

  return { bgRef, textRef }
}

export default useHeroParallax
