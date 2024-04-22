/* Tooltip/index.jsx */

import { forwardRef, useEffect, useState } from 'react'

import KeyTag from './components/KeyTag'

import tooltipVariants from './constants/tooltipVariants'

const Tooltip = forwardRef(function Tooltip(props, ref) {
  // Displays a tooltip below the element when it is hovered or focused

  const { children, shortcutKey, position } = props

  const [toolTipPosition, setTooltipPosition] = useState('')

  useEffect(() => setTooltipPosition(tooltipVariants[position]), [])

  return (
    <p
      className={`${toolTipPosition} absolute invisible opacity-0 z-50 rounded-lg px-2.5 py-1.5 bg-neutral-800 dark:bg-neutral-700 text-white font-urbanist font-normal text-sm whitespace-nowrap select-none pointer-events-none after:absolute after:rotate-45 after:size-2.5 after:bg-neutral-800 after:dark:bg-neutral-700 after:color-transition`}
      ref={ref}
    >
      {children}
      {shortcutKey && (
        <>
          <br />
          <span className="inline-block mt-2 mb-1 text-xs font-medium tracking-wider">
            <KeyTag>Ctrl</KeyTag> + <KeyTag>{shortcutKey.toUpperCase()}</KeyTag>
          </span>
        </>
      )}
    </p>
  )
})

export default Tooltip
