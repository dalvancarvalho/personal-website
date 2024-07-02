/* useScreenProps.js */

import { useEffect, useState } from 'react'

export function useScreenProps() {
  // Returns screen information

  const [isPortraitMode, setIsPortraitMode] = useState(undefined)
  const [screenDimensions, setScreenDimensions] = useState({
    height: undefined, // pixels
    width: undefined, // pixels
  })
  const [screenSize, setScreenSize] = useState({
    // Sizes based on Tailwind's screens
    sm: undefined,
    md: undefined,
    lg: undefined,
    xl: undefined,
    '2xl': undefined,
  })

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    // Event listener cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setIsPortraitMode(screenDimensions.height > screenDimensions.width)
    setScreenSize({
      sm: screenDimensions.width >= 640,
      md: screenDimensions.width >= 768,
      lg: screenDimensions.width >= 1024,
      xl: screenDimensions.width >= 1280,
      '2xl': screenDimensions.width >= 1536,
    })
  }, [screenDimensions])

  function handleResize() {
    // Sets the viewport dimensions to state

    setScreenDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    })
  }

  return { isPortraitMode, screenDimensions, screenSize }
}
