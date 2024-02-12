/* Topic.jsx */

import { Trans } from 'react-i18next'
import Highlight from '../../../../components/Text/Highlight'
import Paragraph from '../../../../components/Text/Paragraph'

function Topic(props) {
  const { heading, text } = props

  return (
    <div className="about-paragraph">
      <h3 className="mb-1 2xl:mb-2 flex items-center gap-2 md:text-lg 2xl:text-xl font-bold text-slate-800 dark:text-gray-200 color-transition">
        {heading}
      </h3>
      <Paragraph className="ml-4">
        <Trans components={{ highlight: <Highlight /> }}>{text}</Trans>
      </Paragraph>
    </div>
  )
}

export default Topic
