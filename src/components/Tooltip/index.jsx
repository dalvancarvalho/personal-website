/* Tooltip/index.jsx */

import KeyTag from './components/KeyTag'

function Tooltip({
  children,
  position = 'right-0 translate-y-4 2xl:translate-y-6',
  shortcutKey,
}) {
  // Displays a tooltip when the element is hovered or focused

  return (
    <p
      className={`absolute ${position} invisible px-[0.75em] py-[0.25em] z-50
      group-hover:visible group-focus-visible:visible rounded-[0.5em] shadow-md opacity-0
      group-hover:opacity-100 group-focus-visible:opacity-100 border border-t-white
      dark:border-t-dark-6 border-b-transparent border-x-transparent bg-slate-50
      dark:bg-dark-5 text-slate-500 dark:text-gray-300 font-normal tracking-normal
      whitespace-nowrap text-base 2xl:text-lg select-none duration-300
      pointer-events-none`}
    >
      {children}
      {shortcutKey && (
        <>
          <br />
          <span
            className="inline-block mt-2 mb-1 text-xs 2xl:text-sm font-medium
            tracking-wider"
          >
            <KeyTag>Ctrl</KeyTag> + <KeyTag>{shortcutKey.toUpperCase()}</KeyTag>
          </span>
        </>
      )}
    </p>
  )
}

export default Tooltip
