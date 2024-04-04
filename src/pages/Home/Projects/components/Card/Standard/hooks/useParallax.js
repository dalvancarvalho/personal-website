/* useParallax.js */

import { useParallax } from 'react-scroll-parallax'

function useCardParallax() {
  // Parallax effect on card element

  const { ref: card } = useParallax({
    shouldAlwaysCompleteAnimation: true,
    speed: 15,
  })

  return { card }
}

export default useCardParallax
