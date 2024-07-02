/* socialNetworks.js */

import {
  faGithub,
  faLastfm,
  faLinkedin,
  faSpotify,
  faSteam,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

export const SOCIAL_NETWORKS = [
  // List of social networks displayed in the footer of each page of the application

  {
    id: crypto.randomUUID(),
    name: 'GitHub',
    icon: faGithub,
    url: 'https://github.com/dalvancarvalho',
    hoverColor: 'hover:text-[#14191e] focus-visible:text-[#14191e]',
  },
  {
    id: crypto.randomUUID(),
    name: 'LinkedIn',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/dalvancarvalho',
    hoverColor: 'hover:text-[#0a66c2] focus-visible:text-[#0a66c2]',
  },
  {
    id: crypto.randomUUID(),
    name: 'X (Twitter)',
    icon: faXTwitter,
    url: 'https://x.com/theRealZackyV',
    hoverColor: 'hover:text-[#0f1419] focus-visible:text-[#0f1419]',
  },
  {
    id: crypto.randomUUID(),
    name: 'Steam',
    icon: faSteam,
    url: 'https://steamcommunity.com/id/dalvancarvalho',
    hoverColor: 'hover:text-[#235684] focus-visible:text-[#235684]',
  },
  {
    id: crypto.randomUUID(),
    name: 'Last.fm',
    icon: faLastfm,
    url: 'https://www.last.fm/user/dalvancarvalho',
    hoverColor: 'hover:text-[#d0232b] focus-visible:text-[#d0232b]',
  },
  {
    id: crypto.randomUUID(),
    name: 'Spotify',
    icon: faSpotify,
    url: 'https://open.spotify.com/user/dalvancarvalho',
    hoverColor: 'hover:text-[#25d865] focus-visible:text-[#25d865]',
  },
]
