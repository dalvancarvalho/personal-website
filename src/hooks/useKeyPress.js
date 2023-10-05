/* useKeyPress.js */

import { useCallback, useEffect } from 'react'

function useKeyPress(shortcutKey, callback) {
  // Calls the given function when a key combination is pressed

  const handleKeyPress = useCallback((event) => {
    const { ctrlKey, code } = event
    const upperCaseKey = shortcutKey.toUpperCase()

    if (ctrlKey === true && code === `Key${upperCaseKey}`) {
      event.preventDefault()
      callback()
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)

    // Event listener cleanup
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])
}

export default useKeyPress
