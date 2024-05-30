/* Tooltip/index.jsx */

import { forwardRef } from 'react'

import KeyTag from './components/KeyTag'

import TOOLTIP_VARIANTS from './constants/tooltipVariants'

const Tooltip = forwardRef(function Tooltip({ children, shortcutKey, position }, ref) {
  // Displays a tooltip next to the element when it is hovered or focused

  const toolTipPosition = TOOLTIP_VARIANTS[position]

  return (
    <p className={`${toolTipPosition} tooltip`} ref={ref}>
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
