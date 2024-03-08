/* useTooltip.js */

import { useRef } from 'react'

function useTooltip(tooltipContent) {
  // Handles the tooltip display logic

  const tooltipRef = useRef(null)
  let timeout

  function hideTooltip() {
    if (!tooltipContent) return

    clearTimeout(timeout)

    tooltipRef.current.classList.remove('tooltip-active')
  }

  function showTooltip() {
    if (!tooltipContent) return

    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(() => tooltipRef.current.classList.add('tooltip-active'), 750)
  }

  return { hideTooltip, showTooltip, tooltipRef }
}

export default useTooltip
