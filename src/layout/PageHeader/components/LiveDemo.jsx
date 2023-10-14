/* LiveDemo.jsx */

import { faArrowUp, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Paragraph from '../../../components/Text/Paragraph'

function LiveDemo(props) {
  // Live demo external link

  const { href, text } = props

  return (
    <Paragraph
      className="max-w-max flex items-center"
      textSize="text-base"
      fontWeight="font-semibold"
    >
      <span className="relative w-6 h-6">
        <FontAwesomeIcon
          className="absolute top-[25%] left-[25%] text-xs text-green-500 animate-ping"
          icon={faCircle}
        />
        <FontAwesomeIcon
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
          text-[0.5rem] text-green-500"
          icon={faCircle}
        />
      </span>
      <a
        className="peer ml-2 mr-3 flex items-center gap-2 text-slate-600
        dark:text-gray-400 hover:text-slate-800 hover:dark:text-gray-200
        focus-visible:text-slate-800 focus-visible:dark:text-gray-200 color-transition"
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

export default LiveDemo
