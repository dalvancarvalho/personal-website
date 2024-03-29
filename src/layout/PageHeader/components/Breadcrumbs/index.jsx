/* Breadcrumbs/index.jsx */

import { faChevronRight, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

function Breadcrumbs(props) {
  // Navigation component

  const { section, t } = props

  const navigate = useNavigate()

  return (
    <div className="max-w-max ml-px flex items-center font-medium font-mark-pro text-base md:text-lg tracking-tighter">
      <button
        aria-label={t('pageHeader.breadcrumbs.home.ariaLabel')}
        className="text-slate-500 dark:text-gray-400 focus-visible:text-slate-900 dark:focus-visible:text-gray-200 button-hover color-transition"
        onClick={() => navigate('/')}
      >
        <FontAwesomeIcon icon={faHouse} />
      </button>
      <FontAwesomeIcon
        className="mx-5 text-slate-500 dark:text-gray-400 text-[0.6rem] md:text-xs color-transition"
        icon={faChevronRight}
      />
      <p className="text-slate-800 dark:text-gray-200 color-transition">{t(section)}</p>
    </div>
  )
}

export default Breadcrumbs
