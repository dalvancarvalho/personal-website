/* Tooltip/index.jsx */

import KeyTag from './components/KeyTag'

function Tooltip(props) {
  // Displays a tooltip below the element when it is hovered or focused

  const { children, position, shortcutKey } = props

  let tooltipPosition

  switch (position) {
    case 'center':
      tooltipPosition = 'right-1/2 translate-x-1/2'
      break

    case 'left':
      tooltipPosition = 'right-0'
      break

    case 'right':
      tooltipPosition = 'left-0'
      break

    // When the 'position' prop is not passed
    default:
      tooltipPosition = 'right-0 translate-x-0 2xl:right-1/2 2xl:translate-x-1/2'
  }

  return (
    <p
      className={`${tooltipPosition} absolute translate-y-4 invisible group-focus-visible:visible opacity-0 group-focus-visible:opacity-100 z-50 border border-slate-150 dark:border-dark-1 rounded-lg shadow-md px-2 py-1 bg-white dark:bg-dark-2 text-slate-600 dark:text-gray-300 font-normal text-sm whitespace-nowrap select-none pointer-events-none duration-300 tooltip-hover`}
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
}

export default Tooltip
