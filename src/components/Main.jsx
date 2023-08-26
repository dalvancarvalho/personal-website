/* Main.jsx */

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Main({ children }) {
  // Wraps the pages of the application

  const { pathname } = useLocation()

  useEffect(() => {
    // Scrolls the window to its initial coordinates whenever the pathname is changed

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [pathname])

  return (
    <main className="overflow-hidden" id="content">
      {children}
    </main>
  )
}

export default Main
