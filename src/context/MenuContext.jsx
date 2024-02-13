/* MenuContext.jsx */

import { createContext, useContext, useEffect, useRef, useState } from 'react'

import useScreenProps from '../hooks/useScreenProps'

// Context for accessing the menu status
const MenuContext = createContext()

function MenuProvider({ children }) {
  const documentElement = document.documentElement
  const { screenSize } = useScreenProps()
  const [isMenuOpen, setMenuState] = useState(false)
  const buttonRef = useRef(null)
  const menuRef = useRef(null)

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
      !menuRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    )
      setMenuState(false)
  }

  function checkEscapeKey(event) {
    if (event.key === 'Escape' && isMenuOpen) setMenuState(false)
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, setMenuState, buttonRef, menuRef }}>
      {children}
    </MenuContext.Provider>
  )
}

function useMenu() {
  // Toggles the state of a menu when a click happens
  // outside of its bounds or the 'Escape' key is pressed

  return useContext(MenuContext)
}

export { useMenu as default, MenuProvider }
