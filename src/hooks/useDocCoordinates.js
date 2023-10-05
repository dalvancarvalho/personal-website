/* useDocCoordinates.js */

import { useEffect, useState } from 'react'

function useDocCoordinates() {
  // Returns the coordinates (x and y) of the document element

  const documentElement = document.documentElement
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    // Event listener cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleScroll() {
    // Sets the element's coordinates to state

    setCoordinates({
      x: documentElement.scrollLeft,
      y: documentElement.scrollTop,
    })
  }

  return coordinates
}

export default useDocCoordinates
