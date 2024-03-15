/* Button/index.jsx */

import useTooltip from './Utils/Tooltip/hooks/useTooltip'

import Tooltip from './Utils/Tooltip'

import buttonVariants from './constants/variants'

function Button(props) {
  // ...

  const {
    ariaLabel,
    callback,
    children,
    shortcutKey = null,
    tabIndex = '0',
    textColor = '',
    textSize = '',
    tooltipContent = null,
    tooltipPosition = null,
    type = 'button',
    variant,
  } = props

  const { style } = buttonVariants[variant]

  const { hideTooltip, showTooltip, tooltipRef } = useTooltip(tooltipContent)

  function handleClick() {
    callback()
    hideTooltip()
  }

  return (
    <button
      aria-label={ariaLabel ?? 'button'}
      className={`${style} ${textColor} ${textSize}`}
      onClick={handleClick}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      tabIndex={tabIndex}
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
