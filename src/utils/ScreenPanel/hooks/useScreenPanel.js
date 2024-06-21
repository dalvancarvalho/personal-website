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
        setScreen('mobile')
        break
      case 0:
        setScreen('sm') // @media (min-width: 640px) {...}
        break
      case 1:
        setScreen('md') // @media (min-width: 768px) {...}
        break
      case 2:
        setScreen('lg') // @media (min-width: 1024px) {...}
        break
      case 3:
        setScreen('xl') // @media (min-width: 1280px) {...}
        break
      case 4:
        setScreen('2xl') // @media (min-width: 1536px) {...}
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
