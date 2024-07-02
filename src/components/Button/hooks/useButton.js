/* useButton.js */

import { useEffect, useRef, useState } from 'react'

import { BUTTON_VARIANTS } from '../constants/buttonVariants'

export function useButton(variant, callback) {
  // Handles the button and tooltip logic

  const style = BUTTON_VARIANTS[variant]

  const [isTooltipActive, setTooltipActive] = useState(false)
  const tooltipRef = useRef(null)

  useEffect(() => {
    let timeout

    if (!isTooltipActive) {
      clearTimeout(timeout)
      tooltipRef.current?.classList.remove('tooltip-active')
      return
    }

    timeout = setTimeout(() => tooltipRef.current?.classList.add('tooltip-active'), 500)

    // Timeout cleanup
    return () => clearTimeout(timeout)
  }, [isTooltipActive])

  function handleClick() {
    if (!callback) return
    callback()
    setTooltipActive(false)
  }

  return { style, handleClick, setTooltipActive, tooltipRef }
}
