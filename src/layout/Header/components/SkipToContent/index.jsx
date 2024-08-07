/* SkipToContent/index.jsx */

import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from '../../../../components/Button'

export function SkipToContent({ t }) {
  // Jumps directly to the content of the page when triggered,
  // skipping the items of the navbar and theme/language switches

  return (
    <a
      className="absolute h-4/5 -top-0.5 left-2 -translate-y-full z-50 ring-none focus-visible:top-1/2 focus-visible:-translate-y-1/2 focus-visible:pointer-events-auto duration-300 group"
      href="#content"
    >
      <Button
        className="h-full shadow-none pointer-events-none"
        tabIndex="-1"
        variant="primary"
      >
        {t('header.skip')}
        <FontAwesomeIcon icon={faAnglesDown} />
      </Button>
    </a>
  )
}
