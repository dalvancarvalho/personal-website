/* ContactInfo/index.jsx */

import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Paragraph } from '../../../../../components/Text/Paragraph'

export function ContactInfo({ icon, href, text, target, t }) {
  // Link to contact information

  return (
    <div className="w-full flex items-center gap-3">
      <FontAwesomeIcon
        className="w-5 text-lg text-slate-800 dark:text-gray-200 color-transition"
        icon={icon}
      />
      <a
        className="mr-1 peer color-transition
        *:focus-visible:text-slate-800
        *:focus-visible:dark:text-gray-200 
        *:data-[href=true]:hover:text-slate-800
        *:data-[href=true]:hover:dark:text-gray-200"
        data-href={href ? true : false}
        href={href ? t(href) : null}
        rel="noopener noreferrer"
        target={target}
      >
        <Paragraph i18nKey={text} variant="medium-bold" />
      </a>
      {href && (
        <FontAwesomeIcon
          className="text-lg text-slate-600 dark:text-gray-400 rotate-45 transition-all ease-out
          peer-hover:text-slate-800
          peer-hover:dark:text-gray-200
          peer-hover:translate-x-1
          peer-hover:-translate-y-1
          peer-focus-visible:text-slate-800
          peer-focus-visible:dark:text-gray-200
          peer-focus-visible:translate-x-1
          peer-focus-visible:-translate-y-1"
          icon={faArrowUp}
        />
      )}
    </div>
  )
}
