/* MailTo/index.jsx */

import { faArrowUp, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Paragraph from '../../../../../components/Text/Paragraph'

function MailTo(props) {
  // E-mail link

  const { t } = props

  return (
    <div className="max-w-max flex items-center gap-2 2xl:gap-3">
      <FontAwesomeIcon
        className="text-lg text-slate-800 dark:text-gray-200 color-transition"
        icon={faEnvelope}
      />
      <a
        className="peer color-transition *:focus-visible:text-slate-800 *:focus-visible:dark:text-gray-200 contact-link-hover"
        href={`mailto:${t('pages.home.contact.email')}?subject=${t(
          'pages.home.contact.subject'
        )}`}
      >
        <Paragraph i18nKey="pages.home.contact.email" variant="base-bold" />
      </a>
      <FontAwesomeIcon
        className="ml-1 2xl:ml-1.5 text-lg 2xl:text-xl text-slate-600 dark:text-gray-400 peer-focus-visible:text-slate-800 dark:peer-focus-visible:text-gray-200 peer-focus-visible:translate-x-1 peer-focus-visible:-translate-y-1 rotate-45 transition-all arrow-hover"
        icon={faArrowUp}
      />
    </div>
  )
}

export default MailTo
