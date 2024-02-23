/* Toast.jsx */

import {
  faCircleCheck,
  faCircleExclamation,
  faCircleXmark,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast } from 'sonner'
import { useTranslation } from 'react-i18next'

function Toast(props) {
  // Displays error, success and warning messages related to the contact form

  const { id, variant } = props
  const { t } = useTranslation()

  let description, heading, icon, iconColor

  switch (variant) {
    case 'error':
      icon = faCircleXmark
      iconColor = 'text-red-500'
      heading = 'pages.home.contact.form.toast.error.heading'
      description = 'pages.home.contact.form.toast.error.description'
      break

    case 'success':
      icon = faCircleCheck
      iconColor = 'text-green-500'
      heading = 'pages.home.contact.form.toast.success.heading'
      description = 'pages.home.contact.form.toast.success.description'
      break

    case 'warning-incomplete-fields':
      icon = faCircleExclamation
      iconColor = 'text-orange-500'
      heading = 'pages.home.contact.form.toast.incomplete.heading'
      description = 'pages.home.contact.form.toast.incomplete.description'
      break

    case 'warning-short-message':
      icon = faCircleExclamation
      iconColor = 'text-orange-500'
      heading = 'pages.home.contact.form.toast.short.heading'
      description = 'pages.home.contact.form.toast.short.description'
      break
  }

  return (
    <div className="relative xs:w-96 rounded-lg border border-slate-150 dark:border-dark-1 shadow-md p-4 sm:p-3.5 bg-white dark:bg-dark-2 flex items-center gap-2 font-urbanist !transition-[background-color,border] !duration-300">
      <FontAwesomeIcon className={iconColor} icon={icon} />
      <div className="text-sm">
        <h3 className="font-bold">{t(heading)}</h3>
        <p className="text-slate-600 dark:text-gray-400 color-transition">
          {t(description)}
        </p>
      </div>
      <button
        className="hidden sm:block absolute top-2 right-1 text-slate-400 dark:text-gray-500 focus-visible:text-slate-900 focus-visible:dark:text-gray-200 color-transition close-toast-hover"
        onClick={() => toast.dismiss(id)}
      >
        <FontAwesomeIcon icon={faClose} />
        <p className="sr-only">{t('pages.home.contact.form.toast.closeButton')}</p>
      </button>
    </div>
  )
}

export default Toast
