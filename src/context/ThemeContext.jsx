/* ThemeContext.jsx */

import { createContext, useContext, useEffect } from 'react'

import useKeyPress from '../hooks/useKeyPress'
import useLocalStorage from '../hooks/useLocalStorage'

import { LIGHT, DARK, SHORTCUT_KEY } from '../constants/themes'

// Context for the theme functionality
const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const documentElement = document.documentElement

  const [theme, setTheme] = useLocalStorage('theme', LIGHT)
  useKeyPress(SHORTCUT_KEY, switchTheme)

  useEffect(() => {
    // Changes the theme of the page
    // Note: The tokens are modified through the add/remove methods rather than being
    // simply overridden, to prevent undesired behaviors in case the 'disable-scrolling'
    // token is present in the DOMTokenList.

    switch (theme) {
      case 'light':
      default:
        documentElement.classList.remove('dark')
        documentElement.classList.add('light')
        break

      case 'dark':
        documentElement.classList.remove('light')
        documentElement.classList.add('dark')
        break
    }
  }, [theme])

  function switchTheme() {
    setTheme((currentTheme) => (currentTheme === LIGHT ? DARK : LIGHT))
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, switchTheme, SHORTCUT_KEY }}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  // Sets the theme of the page

  return useContext(ThemeContext)
}

export { useTheme as default, ThemeProvider }
