/* useInputStyling.js */

import { useEffect, useRef } from 'react'

function useInputStyling(inputName, inputs) {
  // Handles the logic behind the input styling

  const containerRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    // Removes the 'highlighted' class from the field after data submission

    checkField()
  }, [inputs[inputName]])

  function checkField() {
    // Removes the 'highlighted' class if the field is empty and not focused

    if (
      inputRef.current.value.length === 0 &&
      inputRef.current !== document.activeElement
    )
      containerRef.current.classList.remove('highlighted')
  }

  return { checkField, containerRef, inputRef }
}

export default useInputStyling
