/* Tooltip/index.jsx */

import { forwardRef } from 'react'

import KeyTag from './components/KeyTag'

const Tooltip = forwardRef(function Tooltip(props, ref) {
  // Displays a tooltip below the element when it is hovered or focused

  const { children, shortcutKey, tooltipPosition } = props

  let position

  switch (tooltipPosition) {
    case 'center':
      position = 'right-1/2 translate-x-1/2'
      break

    case 'left':
      position = 'right-0'
      break

    case 'right':
      position = 'left-0'
      break

    // When the 'position' prop is not passed
    default:
      position = 'right-0 translate-x-0 xl:right-1/2 xl:translate-x-1/2'
  }

  return (
    <p
      className={`${position} absolute translate-y-4 2xl:translate-y-6 invisible opacity-0 z-50 border border-slate-150 dark:border-dark-1 rounded-lg shadow-md px-2 py-1 bg-white dark:bg-dark-2 text-slate-600 dark:text-gray-300 font-normal text-sm 2xl:text-base whitespace-nowrap select-none pointer-events-none`}
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
