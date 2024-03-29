/* SocialNetworkLink/index.jsx */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialNetworkLink(props) {
  // Link to a social network

  const { hoverColor, icon, name, url } = props

  return (
    <a
      className={`${hoverColor} flex text-slate-600 dark:text-gray-400 focus-visible:dark:text-gray-200 color-transition social-network-hover`}
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      title={name}
    >
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
  )
}

export default SocialNetworkLink
