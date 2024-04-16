/* useButton.js */

import { useEffect, useRef, useState } from 'react'

import buttonVariants from '../constants/buttonVariants'

function useButton(variant, callback) {
  // Handles the button and tooltip logic

  const [style, setStyle] = useState('')
  const [isTooltipActive, setTooltipActive] = useState(false)
  const tooltipRef = useRef(null)

  useEffect(() => setStyle(buttonVariants[variant]), [])

  useEffect(() => {
    let timeout

    if (!isTooltipActive) {
      clearTimeout(timeout)
      tooltipRef.current?.classList.remove('tooltip-active')
      return
    }

    timeout = setTimeout(() => tooltipRef.current?.classList.add('tooltip-active'), 750)

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

export default useButton
