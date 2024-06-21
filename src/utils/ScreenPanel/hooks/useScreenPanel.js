/* useScreenPanel.js */

import { useEffect, useState } from 'react'

import useLocalStorage from '../../../hooks/useLocalStorage'
import useScreenProps from '../../../hooks/useScreenProps'

export default function useScreenPanel() {
  // Defines the properties displayed in the screen panel

  const [isPanelExpanded, setPanelState] = useLocalStorage(
    '_dev_expanded-screen-panel',
    false
  )
  const { isPortraitMode, screenDimensions, screenSize } = useScreenProps()
  const [screen, setScreenSize] = useState(null)

  const orientation = isPortraitMode ? 'Portrait' : 'Landscape'
  const { width, height } = screenDimensions
  const viewportSize = width + ' x ' + height

  useEffect(() => {
    const values = Object.values(screenSize)
    const position = values.lastIndexOf(true)

    switch (position) {
      case -1:
      case 0:
        setScreenSize('sm')
        break
      case 1:
        setScreenSize('md')
        break
      case 2:
        setScreenSize('lg')
        break
      case 3:
        setScreenSize('xl')
        break
      case 4:
        setScreenSize('2xl')
        break
      default:
        setScreenSize('...')
    }
  }, [width])

  function togglePanel(event) {
    event.stopPropagation()
    setPanelState((current) => !current)
  }

  return { isPanelExpanded, togglePanel, orientation, viewportSize, screen }
}
