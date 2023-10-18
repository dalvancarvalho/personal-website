/* ResumeCard.jsx */

import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CallToAction from '../../../components/Button/CallToAction'
import Paragraph from '../../../components/Text/Paragraph'

function ResumeCard(props) {
  // Downloadable resume

  const { altText, file, fileName, href, thumbnail, title } = props

  return (
    <div
      className="relative max-w-max pb-5 px-5 md:pb-6 md:px-6 2xl:pb-7 2xl:px-7 rounded-xl
      bg-slate-100 dark:bg-dark-4 flex flex-col items-center shadow-md color-transition
      group resume-hover"
    >
      <a
        className="absolute inset-0 z-10 w-full h-full rounded-xl"
        href={href}
        rel="noopener noreferrer"
        tabIndex="0"
        target="_blank"
      ></a>
      <div className="my-3 md:my-4 2xl:my-5 flex items-center gap-3 md:gap-4">
        <Paragraph fontWeight="font-bold" textColor="text-slate-800 dark:text-gray-200">
          {title}
        </Paragraph>
        <span
          className="px-[0.7em] py-[0.35em] text-[0.65rem] md:text-xs font-semibold
          bg-red-600 text-white rounded-md select-none"
        >
          PDF
        </span>
      </div>
      <div className="relative rounded-md overflow-hidden">
        <img className="w-72 md:w-[19rem] 2xl:w-80" alt={altText} src={thumbnail} />
        <a download={fileName} href={file} rel="noopener noreferrer" tabIndex="-1">
          <CallToAction
            className="!absolute z-20 bottom-4 left-1/2 -translate-x-1/2 mt-6
            translate-y-2 resume-button-hover"
          >
            Download
            <FontAwesomeIcon icon={faDownload} />
          </CallToAction>
        </a>
      </div>
    </div>
  )
}

export default ResumeCard
