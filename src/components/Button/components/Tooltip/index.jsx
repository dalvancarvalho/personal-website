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
      className={`${toolTipPosition} absolute translate-y-4 invisible opacity-0 z-50 border border-slate-150 dark:border-dark-1 rounded-lg shadow-md px-2 py-1 bg-white dark:bg-dark-2 text-slate-600 dark:text-gray-300 font-urbanist font-normal text-sm whitespace-nowrap select-none pointer-events-none`}
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
