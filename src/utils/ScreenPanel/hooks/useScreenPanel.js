/* useScreenPanel.js */

import { useEffect, useState } from 'react'

import useLocalStorage from '../../../hooks/useLocalStorage'
import useScreenProps from '../../../hooks/useScreenProps'

// prettier-ignore
export default function useScreenPanel() {
  // Defines the properties displayed in the screen panel

  const [screen, setScreen] = useState('n/a')
  const [isPanelExpanded, setPanelExpanded] = useLocalStorage('expanded-screen-panel', false)
  const { isPortraitMode, screenDimensions, screenSize } = useScreenProps()
  const { width, height } = screenDimensions

  const zoomLevel = Math.round(window.devicePixelRatio * 100) + '%'
  const orientation = isPortraitMode ? 'Portrait' : 'Landscape'
  const displaySize = window.screen.width + ' x ' + window.screen.height
  const viewportSize = width + ' x ' + height

  useEffect(() => {
    const values = Object.values(screenSize)
    const position = values.lastIndexOf(true)

    switch (position) {
      case -1:
        setScreen('mobile')
        break
      case 0:
        setScreen('sm')  // min-width: 640px
        break
      case 1:
        setScreen('md')  // min-width: 768px
        break
      case 2:
        setScreen('lg')  // min-width: 1024px
        break
      case 3:
        setScreen('xl')  // min-width: 1280px
        break
      case 4:
        setScreen('2xl') // min-width: 1536px
        break
      default:
        setScreen('n/a')
    }
  }, [screenSize])

  function togglePanel(event) {
    event.stopPropagation()
    setPanelExpanded((current) => !current)
  }

  return {
    isPanelExpanded,
    togglePanel,
    orientation,
    zoomLevel,
    displaySize,
    viewportSize,
    screen,
  }
}
