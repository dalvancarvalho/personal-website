/* Tech/index.jsx */

import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Tech({ name, url }) {
  // Technology displayed in the 'About' section (with link to its webpage)

  return (
    <li className="max-w-max text-sm md:text-base font-bold text-slate-800 dark:text-gray-200 color-transition">
      <a
        className="flex items-center gap-2 group/link"
        href={url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon
          className="mr-1.5 text-sm text-accent transition-all ease-elastic-out duration-300 tech-hover"
          icon={faCaretRight}
        />
        {name}
      </a>
    </li>
  )
}
