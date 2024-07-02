/* SocialNetworksList/index.jsx */

import { forwardRef } from 'react'

import { SocialNetwork } from '../SocialNetwork'

import { SOCIAL_NETWORKS } from './constants/socialNetworks'

export const SocialNetworksList = forwardRef(function SocialNetworksList({ t }, ref) {
  // List of social networks

  return (
    <nav aria-label={t('pages.home.contact.nav.ariaLabel')}>
      <ul className="flex gap-x-6" ref={ref}>
        {SOCIAL_NETWORKS.map(({ id, ...props }) => (
          <li key={id}>
            <SocialNetwork {...props} />
          </li>
        ))}
      </ul>
    </nav>
  )
})
