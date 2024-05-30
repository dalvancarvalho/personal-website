/* Link/index.jsx */

import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Link({ icon, href, label }) {
  // External access link used inside the PageHeader component

  return (
    <a
      className="max-w-max px-4 py-2 flex items-center gap-3 bg-slate-250 dark:bg-dark-2 text-slate-600 dark:text-gray-400 focus-visible:text-slate-800 focus-visible:dark:text-gray-200 rounded-full link-hover color-transition"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon
        className="w-6 text-[1.5rem] text-slate-800 dark:text-gray-200 color-transition"
        icon={icon}
      />
      {label}
      <FontAwesomeIcon className="rotate-45" icon={faArrowUp} />
    </a>
  )
}

export default Link
