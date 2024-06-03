/* Breadcrumbs/index.jsx */

import { faChevronRight, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

import Button from '../../../../components/Button'
import Paragraph from '../../../../components/Text/Paragraph'

export default function Breadcrumbs({ section, t }) {
  // Navigation component

  const navigate = useNavigate()

  return (
    <div className="max-w-max ml-px flex items-center font-medium font-mark-pro text-base md:text-lg tracking-tighter">
      <Button
        ariaLabel={t('pageHeader.breadcrumbs.home.ariaLabel')}
        callback={() => navigate('/')}
        className="w-6"
        tooltip={t('pageHeader.breadcrumbs.home.tooltip')}
        tooltipPosition="top-auto-r"
      >
        <FontAwesomeIcon icon={faHouse} />
        <p className="sr-only">{t('pageHeader.breadcrumbs.home.ariaLabel')}</p>
      </Button>
      <FontAwesomeIcon
        className="mx-5 text-slate-500 dark:text-gray-400 text-[0.6rem] md:text-xs color-transition"
        icon={faChevronRight}
      />
      <Paragraph className="!text-slate-500 dark:!text-gray-400" i18nKey={section} />
    </div>
  )
}
