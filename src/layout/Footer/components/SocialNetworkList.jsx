/* SocialNetworkList */

import SocialNetworkLink from './SocialNetworkLink'
import socialNetworks from '../../../constants/socialNetworks'

function SocialNetworkList({ t }) {
  // List of social network links

  return (
    <nav aria-label={t('contact.nav.ariaLabel')}>
      <ul className="pt-0.5 pb-1 flex gap-x-6">
        {socialNetworks.map(({ color, icon, name, url }) => (
          <li key={name}>
            <SocialNetworkLink color={color} icon={icon} name={name} url={url} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SocialNetworkList
