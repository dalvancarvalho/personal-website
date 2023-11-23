/* MailTo.jsx */

import { faArrowUp, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Paragraph from '../../../../components/Text/Paragraph'

function MailTo(props) {
  // E-mail link

  const { t } = props

  return (
    <Paragraph className="flex items-center" fontWeight="font-bold">
      <FontAwesomeIcon
        className="2xl:mr-2 text-slate-800 dark:text-gray-200 color-transition"
        icon={faEnvelope}
      />
      <a
        className="peer ml-2 mr-3 flex items-center gap-2 text-slate-600 contact-link-hover
        dark:text-gray-400 focus-visible:text-slate-800 focus-visible:dark:text-gray-200
        color-transition"
        href={`mailto:${t('pages.home.contact.email')}?subject=${t(
          'pages.home.contact.subject'
        )}`}
      >
        {t('pages.home.contact.email')}
      </a>
      <FontAwesomeIcon
        className="text-slate-600 dark:text-gray-400 peer-focus-visible:text-slate-800
        dark:peer-focus-visible:text-gray-200 peer-focus-visible:translate-x-1
        peer-focus-visible:-translate-y-1 rotate-45 transition-all arrow-hover"
        icon={faArrowUp}
      />
    </Paragraph>
  )
}

export default MailTo
