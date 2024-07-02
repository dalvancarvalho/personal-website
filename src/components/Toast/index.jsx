/* Toast/index.jsx */

import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

import { useToast } from './hooks/useToast'

export function Toast({ id, variant }) {
  // Displays simple messages in the bottom of the screen

  const { t } = useTranslation()
  const { deleteToast, toastProps } = useToast(variant)
  const { heading, description, icon } = toastProps

  return (
    <div className="relative xs:w-96 rounded-lg border border-slate-150 dark:border-dark-1 shadow-md p-4 sm:p-3.5 bg-white dark:bg-dark-2 flex items-center gap-2.5 font-urbanist !transition-[background-color,border] !duration-300">
      <FontAwesomeIcon className={`!size-5 ${icon.color}`} icon={icon.svg} />
      <div className="text-sm">
        <h3 className="font-bold">{t(heading)}</h3>
        <p className="text-slate-600 dark:text-gray-400 color-transition">
          {t(description)}
        </p>
      </div>
      <button
        className="absolute top-2 right-1 text-slate-400 dark:text-gray-500 color-transition
        hover:text-slate-900
        hover:dark:text-gray-200
        focus-visible:text-slate-900
        focus-visible:dark:text-gray-200"
        onClick={() => deleteToast(id)}
      >
        <FontAwesomeIcon icon={faClose} />
        <p className="sr-only">{t('toast.close')}</p>
      </button>
    </div>
  )
}
