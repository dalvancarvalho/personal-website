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
      className={`${position} absolute invisible px-[0.75em] py-[0.25em] z-50 group-focus-visible:visible group-focus-visible:opacity-100 border border-t-white dark:border-t-dark-1 rounded-[0.5em] shadow-md opacity-0 border-b-transparent border-x-transparent bg-slate-50 dark:bg-dark-2 text-slate-500 dark:text-gray-300 font-normal tracking-normal whitespace-nowrap text-base 2xl:text-lg select-none duration-300 pointer-events-none tooltip-hover`}
    >
      {children}
      {shortcutKey && (
        <>
          <br />
          <span className="inline-block mt-2 mb-1 text-xs 2xl:text-sm font-medium tracking-wider">
            <KeyTag>Ctrl</KeyTag> + <KeyTag>{shortcutKey.toUpperCase()}</KeyTag>
          </span>
        </>
      )}
    </p>
  )
}

export default Tooltip
