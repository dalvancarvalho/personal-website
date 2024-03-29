/* useTooltip.js */

import { useRef } from 'react'

function useTooltip(tooltipContent) {
  // Handles the tooltip display logic

  const ref = useRef(null)
  let timeout

  function hide() {
    // Hides the tooltip

    if (!tooltipContent) return

    clearTimeout(timeout)

    ref.current.classList.remove('tooltip-active')
  }

  function show() {
    // Shows the tooltip

    if (!tooltipContent) return

    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(() => ref.current.classList.add('tooltip-active'), 750)
  }

  return { hide, show, ref }
}

export default useTooltip
