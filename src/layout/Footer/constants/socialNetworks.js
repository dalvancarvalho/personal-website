/* socialNetworks.js */

import {
  faGithub,
  faLastfm,
  faLinkedin,
  faSpotify,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

const socialNetworks = [
  // List of social networks displayed in the footer of each page of the application

  {
    name: 'GitHub',
    icon: faGithub,
    url: 'https://github.com/dalvancarvalho',
    hoverColor: 'hover:text-[#14191e] focus-visible:text-[#14191e]',
  },
  {
    name: 'LinkedIn',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/dalvancarvalho',
    hoverColor: 'hover:text-[#0a66c2] focus-visible:text-[#0a66c2]',
  },
  {
    name: 'Twitter',
    icon: faXTwitter,
    url: 'https://twitter.com/theRealZackyV',
    hoverColor: 'hover:text-[#0f1419] focus-visible:text-[#0f1419]',
  },
  {
    name: 'Last.fm',
    icon: faLastfm,
    url: 'https://www.last.fm/user/dalvancarvalho',
    hoverColor: 'hover:text-[#d0232b] focus-visible:text-[#d0232b]',
  },
  {
    name: 'Spotify',
    icon: faSpotify,
    url: 'https://open.spotify.com/user/dalvancarvalho',
    hoverColor: 'hover:text-[#25d865] focus-visible:text-[#25d865]',
  },
]

export default socialNetworks
