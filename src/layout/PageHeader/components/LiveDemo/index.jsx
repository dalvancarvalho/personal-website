/* LiveDemo/index.jsx */

import { faArrowUp, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function LiveDemo({ href, label }) {
  // Live demo external link used inside the PageHeader component

  return (
    <a
      className="max-w-max px-4 py-2 flex items-center gap-3 bg-slate-250 dark:bg-dark-2 text-slate-600 dark:text-gray-400 focus-visible:text-slate-800 focus-visible:dark:text-gray-200 rounded-full link-hover color-transition"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="relative size-6">
        <FontAwesomeIcon
          className="absolute top-1/4 left-1/4 text-xs text-green-500 animate-ping"
          icon={faCircle}
        />
        <FontAwesomeIcon
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-[0.5rem] text-green-500"
          icon={faCircle}
        />
      </span>
      {label}
      <FontAwesomeIcon className="rotate-45" icon={faArrowUp} />
    </a>
  )
}
