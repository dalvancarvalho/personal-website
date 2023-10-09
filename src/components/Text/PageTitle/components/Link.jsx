/* Link.jsx */

import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Paragraph from '../../Paragraph'

function Link(props) {
  // External access link with arrow

  const { icon, href, text } = props

  return (
    <Paragraph
      className="flex items-center"
      textSize="text-base"
      fontWeight="font-semibold"
    >
      <FontAwesomeIcon
        className="text-[1.5rem] text-slate-800 dark:text-gray-200 color-transition"
        icon={icon}
      />
      <a
        className="peer ml-2 mr-3 flex items-center gap-2 text-slate-600 link-hover
        dark:text-gray-400 focus-visible:text-slate-800 focus-visible:dark:text-gray-200
        color-transition"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {text}
      </a>
      <FontAwesomeIcon
        className="text-slate-600 dark:text-gray-400 peer-focus-visible:text-slate-800
        dark:peer-focus-visible:text-gray-200 peer-focus-visible:translate-x-1
        peer-focus-visible:-translate-y-1 rotate-45 transition-all arrow-hover"
        icon={faArrowUp}
      />
    </Paragraph>
  )
}

export default Link
