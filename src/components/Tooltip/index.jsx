/* Tooltip/index.jsx */

import KeyTag from './components/KeyTag'

function Tooltip(props) {
  // Displays a tooltip when the element is hovered or focused

  const {
    children,
    position = 'right-0 translate-y-4 2xl:translate-y-6',
    shortcutKey,
  } = props

  return (
    <p
      className={`${position} absolute invisible group-focus-visible:visible opacity-0 group-focus-visible:opacity-100 z-50 border border-slate-150 dark:border-dark-1 rounded-lg shadow-md px-3 py-1.5 bg-white dark:bg-dark-2 text-slate-600 dark:text-gray-300 font-normal text-sm whitespace-nowrap select-none pointer-events-none duration-300 tooltip-hover`}
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
