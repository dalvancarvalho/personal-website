/* useCoordinates.jsx */

import { useEffect, useState } from 'react'

function useCoordinates(element) {
  // Returns the coordinates of a given element

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
      x: element.scrollLeft,
      y: element.scrollTop,
    })
  }

  return coordinates
}

export default useCoordinates
