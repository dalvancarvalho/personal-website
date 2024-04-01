/* Toast/index.jsx */

import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast } from 'sonner'
import { useTranslation } from 'react-i18next'

import toastVariants from './constants/toastVariants'

function Toast(props) {
  // Displays error, success and warning messages related to the contact form

  const { id, variant } = props

  const { t } = useTranslation()

  const { description, heading, icon } = toastVariants[variant]

  return (
    <div className="relative xs:w-96 rounded-lg border border-slate-150 dark:border-dark-1 shadow-md p-4 sm:p-3.5 bg-white dark:bg-dark-2 flex items-center gap-2 font-urbanist !transition-[background-color,border] !duration-300">
      <FontAwesomeIcon className={icon.color} icon={icon.svg} />
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