/* SocialNetworkList */

import SocialNetworkLink from './SocialNetworkLink'
import socialNetworks from '../../../constants/socialNetworks'

function SocialNetworkList(props) {
  // List of social network links

  const { t } = props

  return (
    <nav aria-label={t('contact.nav.ariaLabel')}>
      <ul className="pt-0.5 pb-1 flex gap-x-6">
        {socialNetworks.map(({ name, ...props }) => (
          <li key={name}>
            <SocialNetworkLink name={name} {...props} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SocialNetworkList
