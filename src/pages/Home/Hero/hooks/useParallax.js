/* useParallax.js */

import { useParallax as useReactScrollParallax } from 'react-scroll-parallax'

export function useParallax() {
  // Hero section parallax effect

  const { ref: bg } = useReactScrollParallax({
    opacity: [1, -0.5],
    shouldAlwaysCompleteAnimation: true,
    translateY: [0, 70],
  })

  const { ref: text } = useReactScrollParallax({
    opacity: [1, -0.25],
    scale: [1, 0.75],
    shouldAlwaysCompleteAnimation: true,
  })

  return { bg, text }
}
