/* useParallax.js */

import { useParallax as useReactScrollParallax } from 'react-scroll-parallax'

export function useParallax() {
  // Parallax effect on card element

  const { ref: card } = useReactScrollParallax({
    shouldAlwaysCompleteAnimation: true,
    speed: 15,
  })

  return { card }
}
