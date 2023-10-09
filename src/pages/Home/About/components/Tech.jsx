/* Tech.jsx */

import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Tech(props) {
  // Link to the tech's page (with decoration)

  const { name, url } = props

  return (
    <li
      className="max-w-max text-sm md:text-base 2xl:text-lg font-bold
      text-slate-800 dark:text-gray-200 color-transition"
    >
      <a
        className="flex items-center gap-2 focus-visible:translate-x-1
        transition-transform duration-150 tech-hover"
        href={url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon
          className="text-sm 2xl:text-base text-accent color-transition"
          icon={faCaretRight}
        />
        {name}
      </a>
    </li>
  )
}

export default Tech
