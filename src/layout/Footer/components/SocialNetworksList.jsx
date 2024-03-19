/* SocialNetworksList */

import SocialNetworkLink from './SocialNetworkLink'

import socialNetworks from '../../../constants/socialNetworks'

function SocialNetworksList(props) {
  // List of social network links

  const { t } = props

  return (
    <nav aria-label={t('contact.nav.ariaLabel')}>
      <ul className="flex gap-x-6">
        {socialNetworks.map((props) => (
          <li key={props.name}>
            <SocialNetworkLink {...props} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SocialNetworksList
