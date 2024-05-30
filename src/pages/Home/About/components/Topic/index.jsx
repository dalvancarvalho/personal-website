/* Topic/index.jsx */

import Paragraph from '../../../../../components/Text/Paragraph'

function Topic({ heading, text }) {
  return (
    <div className="about-paragraph">
      <h3 className="mb-1 flex items-center gap-2 md:text-lg font-bold text-slate-800 dark:text-gray-200 color-transition">
        {heading}
      </h3>
      <Paragraph className="ml-4" i18nKey={text} />
    </div>
  )
}

export default Topic
