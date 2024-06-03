/* MenuContext.jsx */

import { createContext, useContext, useEffect, useRef, useState } from 'react'

import useScreenProps from '../hooks/useScreenProps'

// Context for accessing the menu status
const MenuContext = createContext()

export function MenuProvider({ children }) {
  const documentElement = document.documentElement

  const { screenSize } = useScreenProps()
  const [isMenuOpen, setMenuState] = useState(false)
  const button = useRef(null)
  const menu = useRef(null)

  useEffect(() => {
    isMenuOpen
      ? documentElement.classList.add('disable-scrolling')
      : documentElement.classList.remove('disable-scrolling')

    document.addEventListener('mousedown', checkOutsideClick)
    document.addEventListener('touchstart', checkOutsideClick)
    document.addEventListener('keydown', checkEscapeKey)

    // Event listener cleanup
    return () => {
      document.removeEventListener('mousedown', checkOutsideClick)
      document.removeEventListener('touchstart', checkOutsideClick)
      document.removeEventListener('keydown', checkEscapeKey)
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (screenSize.md) setMenuState(false)
  }, [screenSize])

  function checkOutsideClick(event) {
    if (
      isMenuOpen &&
      !menu.current.contains(event.target) &&
      !button.current.contains(event.target)
    )
      setMenuState(false)
  }

  function checkEscapeKey(event) {
    if (event.key === 'Escape' && isMenuOpen) setMenuState(false)
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, setMenuState, button, menu }}>
      {children}
    </MenuContext.Provider>
  )
}

export default function useMenu() {
  // Handles the logic of the main menu

  return useContext(MenuContext)
}
