/* navLinks.js */

import {
  faDownload,
  faHouse,
  faInfoCircle,
  faListUl,
  faPaperPlane,
  faPenRuler,
  faPersonChalkboard,
} from '@fortawesome/free-solid-svg-icons'

const navLinks = {
  // List of navigation links for each page of the application

  ['/']: [
    {
      icon: faHouse,
      name: 'home',
    },
    {
      icon: faInfoCircle,
      name: 'about',
    },
    {
      icon: faPenRuler,
      name: 'projects',
    },
    {
      icon: faPaperPlane,
      name: 'contact',
    },
  ],
  ['/br-geo']: [
    {
      icon: faHouse,
      name: 'home',
    },
    {
      icon: faPersonChalkboard,
      name: 'intro',
    },
    {
      icon: faListUl,
      name: 'details',
    },
  ],
  ['/personal-page']: [
    {
      icon: faHouse,
      name: 'home',
    },
    {
      icon: faPersonChalkboard,
      name: 'intro',
    },
    {
      icon: faListUl,
      name: 'details',
    },
  ],
  ['/resume']: [
    {
      icon: faHouse,
      name: 'home',
    },
    {
      icon: faDownload,
      name: 'download',
    },
  ],
  ['/split-it']: [
    {
      icon: faHouse,
      name: 'home',
    },
    {
      icon: faPersonChalkboard,
      name: 'intro',
    },
    {
      icon: faListUl,
      name: 'details',
    },
  ],
}

export default navLinks
