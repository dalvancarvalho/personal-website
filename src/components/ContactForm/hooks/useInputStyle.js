/* useInputStyle.js */

import { useEffect, useRef } from 'react'

export function useInputStyle(inputName, inputs) {
  // Handles the logic behind the input style

  const container = useRef(null)
  const input = useRef(null)

  // Resets the input style after data submission
  useEffect(() => checkInput(), [inputs[inputName]])

  function checkInput() {
    // Removes the 'highlighted' class if the input is empty and not focused

    if (input.current.value.length === 0 && input.current !== document.activeElement)
      container.current.classList.remove('highlighted')
  }

  return { checkInput, container, input }
}
