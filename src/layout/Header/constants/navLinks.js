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

export const NAV_LINKS = {
  // List of navigation links for each page of the application

  '/': [
    {
      id: crypto.randomUUID(),
      name: 'home',
      icon: faHouse,
    },
    {
      id: crypto.randomUUID(),
      name: 'about',
      icon: faInfoCircle,
    },
    {
      id: crypto.randomUUID(),
      name: 'projects',
      icon: faPenRuler,
    },
    {
      id: crypto.randomUUID(),
      name: 'contact',
      icon: faPaperPlane,
    },
  ],
  '/br-geo': [
    {
      id: crypto.randomUUID(),
      name: 'home',
      icon: faHouse,
    },
    {
      id: crypto.randomUUID(),
      name: 'intro',
      icon: faPersonChalkboard,
    },
    {
      id: crypto.randomUUID(),
      name: 'details',
      icon: faListUl,
    },
  ],
  '/personal-website': [
    {
      id: crypto.randomUUID(),
      name: 'home',
      icon: faHouse,
    },
    {
      id: crypto.randomUUID(),
      name: 'intro',
      icon: faPersonChalkboard,
    },
    {
      id: crypto.randomUUID(),
      name: 'details',
      icon: faListUl,
    },
  ],
  '/resume': [
    {
      id: crypto.randomUUID(),
      name: 'home',
      icon: faHouse,
    },
    {
      id: crypto.randomUUID(),
      name: 'topics',
      icon: faListUl,
    },
    {
      id: crypto.randomUUID(),
      name: 'download',
      icon: faDownload,
    },
  ],
  '/split-it': [
    {
      id: crypto.randomUUID(),
      name: 'home',
      icon: faHouse,
    },
    {
      id: crypto.randomUUID(),
      name: 'intro',
      icon: faPersonChalkboard,
    },
    {
      id: crypto.randomUUID(),
      name: 'details',
      icon: faListUl,
    },
  ],
}
