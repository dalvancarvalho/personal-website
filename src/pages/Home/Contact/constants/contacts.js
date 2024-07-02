/* contacts.js */

import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

export const CONTACTS = [
  {
    id: crypto.randomUUID(),
    text: 'pages.home.contact.email.text',
    href: 'pages.home.contact.email.href',
    target: '_self',
    icon: faEnvelope,
  },
  {
    id: crypto.randomUUID(),
    text: 'pages.home.contact.phone.text',
    href: 'pages.home.contact.phone.href',
    target: '_blank',
    icon: faPhone,
  },
  {
    id: crypto.randomUUID(),
    text: 'pages.home.contact.location.text',
    href: null,
    target: null,
    icon: faLocationDot,
  },
]
