/* Button/index.jsx */

import { forwardRef } from 'react'

import useButton from './hooks/useButton'

import Tooltip from './components/Tooltip'

const Button = forwardRef(function Button(props, ref) {
  // Button with primary, secondary, and unstyled variants

  const {
    ariaLabel = 'button',
    callback,
    children,
    className = '', // any other class needed goes here
    shortcutKey = null,
    tabIndex = '0',
    tooltip = null,
    tooltipPosition = null,
    type = 'button',
    variant = 'unstyled', // defaults to 'unstyled' variant if this prop is not passed
  } = props

  const { style, handleClick, ...tooltipProps } = useButton(variant, callback, tooltip)

  return (
    <button
      aria-label={ariaLabel}
      className={`${style} ${className}`}
      onClick={handleClick}
      onMouseEnter={tooltipProps.show}
      onMouseLeave={tooltipProps.hide}
      onFocus={tooltipProps.show}
      onBlur={tooltipProps.hide}
      ref={ref}
      tabIndex={tabIndex}
      type={type}
    >
      {children}
      {tooltip && (
        <Tooltip
          ref={tooltipProps.ref}
          shortcutKey={shortcutKey}
          tooltipPosition={tooltipPosition}
        >
          {tooltip}
        </Tooltip>
      )}
    </button>
  )
})

export default Button
