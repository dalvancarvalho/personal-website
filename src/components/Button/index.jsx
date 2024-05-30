/* Button/index.jsx */

import { forwardRef } from 'react'

import useButton from './hooks/useButton'

import Tooltip from './components/Tooltip'

// prettier-ignore
const Button = forwardRef(function Button(
  {
    children,
    className = '',
    ariaLabel = 'button',
    callback,
    shortcutKey = null,
    tabIndex = '0',
    tooltip = null,
    tooltipPosition = null,
    type = 'button',
    variant = 'unstyled', // defaults to 'unstyled' variant if this prop is not passed
  },
  ref
) {
  // Button with primary, secondary, and unstyled variants

  const { style, handleClick, setTooltipActive, tooltipRef } = useButton(variant, callback)

  return (
    <button
      aria-label={ariaLabel}
      className={`${style} ${className}`}
      onClick={handleClick}
      onMouseEnter={() => setTooltipActive(true)}
      onMouseLeave={() => setTooltipActive(false)}
      onFocus={() => setTooltipActive(true)}
      onBlur={() => setTooltipActive(false)}
      ref={ref}
      tabIndex={tabIndex}
      type={type}
    >
      {children}
      {tooltip && (
        <Tooltip ref={tooltipRef} shortcutKey={shortcutKey} position={tooltipPosition}>
          {tooltip}
        </Tooltip>
      )}
    </button>
  )
})

export default Button
