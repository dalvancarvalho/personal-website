/* useParallax.js */

import { useParallax } from 'react-scroll-parallax'

function useCardParallax() {
  // Parallax effect on card element

  const { ref: parallaxRef } = useParallax({
    shouldAlwaysCompleteAnimation: true,
    speed: 15,
  })

  return parallaxRef
}

export default useCardParallax
