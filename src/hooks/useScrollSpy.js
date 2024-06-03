/* useScrollSpy.js */

import { useEffect } from 'react'
import { scrollSpy } from 'react-scroll'

export default function useScrollSpy() {
  // Updates the scroll spy functionality when the page component is mounted

  useEffect(() => scrollSpy.update(), [])
}
