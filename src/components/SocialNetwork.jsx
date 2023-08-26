/* SocialNetwork.jsx */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialNetwork({ color, icon, name, url }) {
  // Social network link

  return (
    <a
      className={`flex text-slate-600 dark:text-gray-400 ${color}
      hover:dark:text-gray-200 focus-visible:dark:text-gray-200 color-transition`}
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      title={name}
    >
      <FontAwesomeIcon size="2x" icon={icon} />
    </a>
  )
}

export default SocialNetwork
