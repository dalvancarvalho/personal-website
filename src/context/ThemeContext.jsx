/* ThemeContext.jsx */

import { createContext, useContext, useEffect } from 'react'
import useKeyPress from '../hooks/useKeyPress'
import useLocalStorage from '../hooks/useLocalStorage'
import { light, dark } from '../constants/themes'

// Context for the theme functionality
const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const documentElement = document.documentElement
  const SHORTCUT_KEY = 'k'
  const [theme, setTheme] = useLocalStorage('theme', light)
  useKeyPress(SHORTCUT_KEY, changeTheme)

  useEffect(() => {
    // Changes the theme of the page
    // Note: The tokens are modified through the add/remove methods rather than being
    // simply overridden, to prevent undesired behaviors in case the 'disable-scrolling'
    // token is present in the DOMTokenList.

    if (theme === 'light') {
      documentElement.classList.remove('dark')
      documentElement.classList.add('light')
    } else {
      documentElement.classList.remove('light')
      documentElement.classList.add('dark')
    }
  }, [theme])

  function changeTheme() {
    setTheme((currentTheme) => (currentTheme === light ? dark : light))
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, changeTheme, SHORTCUT_KEY }}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  // Sets the theme of the page

  return useContext(ThemeContext)
}

export { useTheme as default, ThemeProvider }
