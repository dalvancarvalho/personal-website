/* useScreenPanel.js */

import { useEffect, useState } from 'react'

import useLocalStorage from '../../../hooks/useLocalStorage'
import useScreenProps from '../../../hooks/useScreenProps'

// prettier-ignore
export default function useScreenPanel() {
  // Defines the properties displayed in the screen panel

  const [screen, setScreen] = useState('...')
  const [isPanelExpanded, setPanelExpanded] = useLocalStorage('expanded-screen-panel', false)
  const { isPortraitMode, screenDimensions, screenSize } = useScreenProps()
  const { width, height } = screenDimensions

  const orientation = isPortraitMode ? 'Portrait' : 'Landscape'
  const viewportSize = width + ' x ' + height

  useEffect(() => {
    const values = Object.values(screenSize)
    const position = values.lastIndexOf(true)

    switch (position) {
      case -1:
      case 0:
        setScreen('sm')  // 640px
        break
      case 1:
        setScreen('md')  // 768px
        break
      case 2:
        setScreen('lg')  // 1024px
        break
      case 3:
        setScreen('xl')  // 1280px
        break
      case 4:
        setScreen('2xl') // 1536px
        break
      default:
        setScreen('...')
    }
  }, [screenSize])

  function togglePanel(event) {
    event.stopPropagation()
    setPanelExpanded((current) => !current)
  }

  return { isPanelExpanded, togglePanel, orientation, viewportSize, screen }
}
