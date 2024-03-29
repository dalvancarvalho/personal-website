/* Info/index.jsx */

import useLinkAttributes from './hooks/useLinkAttributes'

import Paragraph from '../../../../components/Text/Paragraph'

function Info(props) {
  // Paragraph with link to a local section or external website

  const { href, label, paragraph } = props

  const attributes = useLinkAttributes(href)

  return (
    <Paragraph variant="fixed-sm-normal">
      {paragraph}
      <a
        className="font-bold text-slate-600 dark:text-gray-400 focus-visible:text-slate-900 focus-visible:dark:text-gray-200 color-transition footer-link-hover"
        href={attributes.href}
        target={attributes.target}
        rel="noopener noreferrer"
      >
        {label}
      </a>
    </Paragraph>
  )
}

export default Info
