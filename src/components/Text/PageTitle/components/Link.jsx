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
        className="peer ml-2 mr-3 flex items-center gap-2 text-slate-600
        dark:text-gray-400 hover:text-slate-800 hover:dark:text-gray-200
        focus-visible:text-slate-800 focus-visible:dark:text-gray-200
        color-transition"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {text}
      </a>
      <FontAwesomeIcon className="external-access-arrow" icon={faArrowUp} />
    </Paragraph>
  )
}

export default Link
