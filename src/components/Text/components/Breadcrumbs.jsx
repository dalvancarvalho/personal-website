/* Breadcrumbs.jsx */

import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

function Breadcrumbs({ t }) {
  const navigate = useNavigate()

  return (
    <div
      className="max-w-max ml-px flex items-center font-medium font-mark-pro text-base
      md:text-lg tracking-tighter"
    >
      <button
        className="text-slate-500 dark:text-gray-400 hover:text-slate-900
        dark:hover:text-gray-200 focus-visible:text-slate-900
        dark:focus-visible:text-gray-200 tracking-tighter color-transition"
        onClick={() => navigate('/')}
      >
        {t('title.breadcrumbs.home')}
      </button>
      <FontAwesomeIcon
        className="mx-3 text-slate-500 dark:text-gray-400 text-[0.6rem] md:text-xs
        color-transition"
        icon={faChevronRight}
      />
      <p className="text-slate-800 dark:text-gray-200 color-transition">
        {t('title.breadcrumbs.featured')}
      </p>
    </div>
  )
}

export default Breadcrumbs
