/* Link/index.jsx */

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Link({ icon, href, label }) {
  // External access link used inside the PageHeader component

  return (
    <a
      className="max-w-max h-10 rounded-full pl-3 pr-4 flex items-center gap-2 bg-blue-400/25 dark:bg-orange-500/25 text-slate-600 dark:text-gray-400 color-transition group/link
      md:bg-slate-250
      md:dark:bg-dark-2
      hover:bg-blue-300/50
      focus-visible:bg-blue-400/25
      hover:dark:bg-orange-500/25
      focus-visible:dark:bg-orange-500/25
      hover:text-slate-800
      focus-visible:text-slate-800
      hover:dark:text-gray-200
      focus-visible:dark:text-gray-200"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon
        className="w-6 text-slate-800 dark:text-gray-200 color-transition"
        icon={icon}
        size="xl"
      />
      {label}
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
    </a>
  )
}
