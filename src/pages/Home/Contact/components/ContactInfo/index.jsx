/* ContactInfo/index.jsx */

import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Paragraph from '../../../../../components/Text/Paragraph'

function ContactInfo({ icon, href, text, target, t }) {
  // Link to contact information

  return (
    <div className="w-full flex items-center gap-3">
      <FontAwesomeIcon
        className="w-5 text-lg text-slate-800 dark:text-gray-200 color-transition"
        icon={icon}
      />
      <a
        className={`mr-1 peer color-transition *:focus-visible:text-slate-800 *:focus-visible:dark:text-gray-200 ${
          href ? 'contact-link-hover' : null
        }`}
        href={href ? t(href) : null}
        rel="noopener noreferrer"
        target={target}
      >
        <Paragraph i18nKey={text} variant="medium-bold" />
      </a>
      {href && (
        <FontAwesomeIcon
          className="text-lg text-slate-600 dark:text-gray-400 peer-focus-visible:text-slate-800 dark:peer-focus-visible:text-gray-200 peer-focus-visible:translate-x-1 peer-focus-visible:-translate-y-1 rotate-45 transition-all arrow-hover"
          icon={faArrowUp}
        />
      )}
    </div>
  )
}

export default ContactInfo
