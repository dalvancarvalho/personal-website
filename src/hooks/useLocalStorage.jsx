/* useLocalStorage.jsx */

import { useEffect, useState } from 'react'

function useLocalStorage(key, initialValue) {
  // Stores a state inside the Local Storage

  const [value, setValue] = useState(() => getSavedValue(key, initialValue))

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}

function getSavedValue(key, initialValue) {
  // Returns the saved value from the Local Storage (if any) or from the 'initialValue' parameter

  const savedValue = JSON.parse(localStorage.getItem(key))

  if (savedValue) return savedValue

  if (initialValue instanceof Function) return initialValue()

  return initialValue
}

export default useLocalStorage
