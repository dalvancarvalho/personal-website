/* toastVariants.js */

import {
  faCircleCheck,
  faCircleExclamation,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons'

// prettier-ignore
export const TOAST_VARIANTS = {

  /* Contact form */
  'cf-error': {
    heading: 'toast.contactForm.error.heading',
    description: 'toast.contactForm.error.description',
    icon: {
      color: 'text-red-500',
      svg: faCircleXmark,
    },
  },
  'cf-success': {
    heading: 'toast.contactForm.success.heading',
    description: 'toast.contactForm.success.description',
    icon: {
      color: 'text-green-500',
      svg: faCircleCheck,
    },
  },
  'cf-incomplete': { // Incomplete fields
    heading: 'toast.contactForm.incomplete.heading',
    description: 'toast.contactForm.incomplete.description',
    icon: {
      color: 'text-orange-500',
      svg: faCircleExclamation,
    },
  },
  'cf-short': { // Short message
    heading: 'toast.contactForm.short.heading',
    description: 'toast.contactForm.short.description',
    icon: {
      color: 'text-orange-500',
      svg: faCircleExclamation,
    },
  },
}
