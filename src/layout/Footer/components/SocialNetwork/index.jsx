/* SocialNetwork/index.jsx */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialNetwork({ hoverColor, icon, name, url }) {
  // Link to a social network

  return (
    <a
      className={`flex text-slate-600 dark:text-gray-400 ${hoverColor} hover:dark:text-gray-200 focus-visible:dark:text-gray-200 color-transition`}
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      title={name}
    >
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
  )
}
