/* Button/index.jsx */

import { forwardRef } from 'react'

import useTooltip from './hooks/useTooltip'

import Tooltip from './components/Tooltip'

import buttonVariants from './constants/buttonVariants'

const Button = forwardRef(function Button(props, ref) {
  // Button with primary, secondary, and unstyled variants

  const {
    ariaLabel = 'button',
    callback,
    children,
    className = '', // any other class needed goes here
    shortcutKey = null,
    tabIndex = '0',
    tooltipContent = null,
    tooltipPosition = null,
    type = 'button',
    variant = 'unstyled', // defaults to 'unstyled' variant if this prop is not passed
  } = props

  const style = buttonVariants[variant]

  const tooltip = useTooltip(tooltipContent)

  function handleClick() {
    if (!callback) return

    callback()
    tooltip.hide()
  }

  return (
    <button
      aria-label={ariaLabel}
      className={`${style} ${className}`}
      onClick={handleClick}
      onMouseEnter={tooltip.show}
      onMouseLeave={tooltip.hide}
      onFocus={tooltip.show}
      onBlur={tooltip.hide}
      ref={ref}
      tabIndex={tabIndex}
      type={type}
    >
      {children}
      {tooltipContent && (
        <Tooltip
          ref={tooltip.ref}
          shortcutKey={shortcutKey}
          tooltipPosition={tooltipPosition}
        >
          {tooltipContent}
        </Tooltip>
      )}
    </button>
  )
})

export default Button
