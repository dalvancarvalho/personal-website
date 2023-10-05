/* useScrollToTop.jsx */

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function useScrollToTop() {
  // Scrolls the window to its initial coordinates whenever the pathname is changed

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [pathname])
}

export default useScrollToTop
