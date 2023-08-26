/* SkipToContent.jsx */

import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CTAButton from './CTAButton'

function SkipToContent({ t }) {
  // Jumps directly to the content of the page when triggered,
  // skipping the items of the navbar and theme/language switches

  return (
    <a
      className="absolute h-4/5 -top-0.5 left-2 -translate-y-full z-50 outline-none
      dark:outline-none focus-visible:top-1/2 focus-visible:-translate-y-1/2
      focus-visible:pointer-events-auto duration-300 group"
      href="#content"
    >
      <CTAButton
        className="h-full shadow-none group-focus-visible:shadow-lg"
        tabIndex="-1"
      >
        {t('header.skip')}
        <FontAwesomeIcon icon={faAnglesDown} />
      </CTAButton>
    </a>
  )
}

export default SkipToContent
