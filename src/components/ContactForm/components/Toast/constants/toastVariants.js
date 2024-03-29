/* toastVariants.js */

import {
  faCircleCheck,
  faCircleExclamation,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons'

const toastVariants = {
  error: {
    heading: 'pages.home.contact.form.toast.error.heading',
    description: 'pages.home.contact.form.toast.error.description',
    icon: {
      color: 'text-red-500',
      svg: faCircleXmark,
    },
  },
  success: {
    heading: 'pages.home.contact.form.toast.success.heading',
    description: 'pages.home.contact.form.toast.success.description',
    icon: {
      color: 'text-green-500',
      svg: faCircleCheck,
    },
  },
  'warning-incomplete-fields': {
    heading: 'pages.home.contact.form.toast.incomplete.heading',
    description: 'pages.home.contact.form.toast.incomplete.description',
    icon: {
      color: 'text-orange-500',
      svg: faCircleExclamation,
    },
  },
  'warning-short-message': {
    heading: 'pages.home.contact.form.toast.short.heading',
    description: 'pages.home.contact.form.toast.short.description',
    icon: {
      color: 'text-orange-500',
      svg: faCircleExclamation,
    },
  },
}

export default toastVariants
