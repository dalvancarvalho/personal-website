/* ArrowButtons/index.jsx */

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function PrevButton({ children, ...props }) {
  return (
    <button
      className="size-14 rounded-full flex items-center justify-center *:text-slate-800 *:dark:text-gray-200 *:disabled:text-slate-400 *:dark:disabled:text-gray-600 *:color-transition appearance-none touch-manipulation"
      type="button"
      {...props}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
      {children}
    </button>
  )
}

export function NextButton({ children, ...props }) {
  return (
    <button
      className="size-14 rounded-full flex items-center justify-center *:text-slate-800 *:dark:text-gray-200 *:disabled:text-slate-400 *:dark:disabled:text-gray-600 *:color-transition appearance-none touch-manipulation"
      type="button"
      {...props}
    >
      <FontAwesomeIcon icon={faChevronRight} />
      {children}
    </button>
  )
}
