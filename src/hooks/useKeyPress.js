/* useKeyPress.js */

import { useEffect } from 'react'

export default function useKeyPress(key, callback) {
  // Calls the given function when a key combination is detected

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)

    // Event listener cleanup
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [])

  function handleKeyPress(event) {
    const { ctrlKey, code } = event
    const upperCaseKey = key.toUpperCase()

    if (ctrlKey === true && code === `Key${upperCaseKey}`) {
      event.preventDefault()
      callback()
    }
  }
}
