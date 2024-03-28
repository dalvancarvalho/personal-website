/* SocialNetworksList/index.jsx */

import { forwardRef } from 'react'

import SocialNetworkLink from '../SocialNetworkLink'

import socialNetworks from '../../constants/socialNetworks'

const SocialNetworksList = forwardRef(function SocialNetworksList(props, ref) {
  // List of social networks links

  const { t } = props

  return (
    <nav aria-label={t('pages.home.contact.nav.ariaLabel')}>
      <ul className="flex gap-x-6" ref={ref}>
        {socialNetworks.map((props) => (
          <li key={props.name}>
            <SocialNetworkLink {...props} />
          </li>
        ))}
      </ul>
    </nav>
  )
})

export default SocialNetworksList
