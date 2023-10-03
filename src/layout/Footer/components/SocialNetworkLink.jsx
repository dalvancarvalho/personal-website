/* SocialNetworkLink.jsx */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialNetworkLink(props) {
  // Link to a social network

  const { color, icon, name, url } = props

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

export default SocialNetworkLink
