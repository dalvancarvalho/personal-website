/* Standard/index.jsx */

import useTooltip from '../Utils/Tooltip/hooks/useTooltip'

import Tooltip from '../Utils/Tooltip'

function Button(props) {
  // Standard button with an optional tooltip

  const {
    ariaLabel,
    callback,
    children,
    className = '', // any other class needed goes here
    shortcutKey = null,
    textColor = 'text-slate-500 dark:text-gray-400',
    tooltipContent = null,
    tooltipPosition = null,
    type = 'button',
  } = props

  const { hideTooltip, showTooltip, tooltipRef } = useTooltip(tooltipContent)

  return (
    <button
      aria-label={ariaLabel ?? 'button'}
      className={`${textColor} ${className} relative button-hover focus-visible:text-slate-900 focus-visible:dark:text-gray-200 cursor-pointer color-transition group`}
      onClick={() => {
        callback()
        hideTooltip()
      }}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      type={type}
    >
      {children}
      {tooltipContent && (
        <Tooltip
          ref={tooltipRef}
          shortcutKey={shortcutKey}
          tooltipPosition={tooltipPosition}
        >
          {tooltipContent}
        </Tooltip>
      )}
    </button>
  )
}

export default Button
